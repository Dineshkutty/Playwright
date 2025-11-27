import fs from "fs";
import path from "path";

class HtmlCustomReporter {
  constructor(options) {
    this.options = options || {};
    this.results = [];
    this.outputDir = this.options.outputDir || "./playwright-report";
    if (!fs.existsSync(this.outputDir))
      fs.mkdirSync(this.outputDir, { recursive: true });
  }

  onTestEnd(test, result) {
    this.results.push({
      title: test.title,
      status: result.status,
      duration: result.duration,
      error: result.error ? result.error.message : null,
    });
  }

  async onEnd() {
    const htmlContent = this.generateHtml(this.results);
    const filePath = path.join(this.outputDir, "custom-report.html");
    fs.writeFileSync(filePath, htmlContent, "utf8");
    console.log(`\nCustom HTML report generated at: ${filePath}`);
  }

  generateHtml(results) {
    const rows = results
      .map((r) => {
        // Use plain CSS colors, no dependency on Playwright internals
        const color =
          r.status === "passed"
            ? "green"
            : r.status === "failed"
            ? "red"
            : "orange";
        return `<tr>
        <td>${r.title}</td>
        <td style="color:${color}">${r.status}</td>
        <td>${r.duration} ms</td>
        <td>${r.error || ""}</td>
      </tr>`;
      })
      .join("\n");

    return `
      <html>
      <head>
        <title>Custom Playwright Report</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; }
          table { border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
          th { background: #f4f4f4; }
        </style>
      </head>
      <body>
        <h1>Playwright Test Report</h1>
        <table>
          <thead>
            <tr>
              <th>Test</th>
              <th>Status</th>
              <th>Duration</th>
              <th>Error</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </body>
      </html>
    `;
  }
}

export default HtmlCustomReporter;
