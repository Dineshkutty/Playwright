Playwright UI Automation Framework (JavaScript)

A production-ready, scalable Playwright UI Automation Framework built completely in JavaScript, following SOLID principles, Page Object Model (POM), test data separation, environment management, reusable utilities, fixtures, and GitHub Actions CI/CD.

🚀 Features
✔ JavaScript-based (No TypeScript)

Built fully with JS for simplicity & fast learning.

✔ Page Object Model (POM)

All UI logic is inside the Page classes;
Tests contain only high-level steps → very clean and readable.

✔ SOLID Principles Applied

S — Single Responsibility:
Each page, utility, and module has only one responsibility.

O — Open/Closed:
Framework supports extension (new pages, features) without modifying base code.

L — Liskov Substitution:
Page objects inherit cleanly from BasePage.

I — Interface Segregation:
Helpers/utilities split into small modules.

D — Dependency Inversion:
Tests depend on abstractions (pages), not implementations.

✔ Data-driven tests

Supports:

JSON data file → login tests

CSV data file → profile update tests

✔ dotenv Environment Management

Configurable base URL, user details, credentials etc.

✔ Winston Logging

Central logging:

Info logs

Error logs

Test start/stop logs

✔ GitHub Actions CI Workflow

✓ Runs playwright tests
✓ Outputs HTML report

# Playwright UI Automation Framework (JavaScript)

A production-ready, scalable Playwright UI Automation Framework built in JavaScript. The framework follows SOLID principles and the Page Object Model (POM), separates test data and environments, and provides reusable utilities, fixtures, and CI workflow examples.

## Features

- **JavaScript-based:** Built entirely with JavaScript for simplicity and quick onboarding.
- **Page Object Model (POM):** UI logic lives in Page classes; tests stay high-level and readable.
- **SOLID Principles:** Clear responsibilities, extensibility, and small focused modules.
- **Data-driven tests:** Supports JSON and CSV test data.
- **Environment management:** Use a `.env` for environment-specific configuration.
- **Winston logging:** Centralized logging for info/errors and test lifecycle events.
- **GitHub Actions CI:** Example workflow to run tests and produce HTML reports.

## Folder Structure (example)

```
playwright-ui-framework-js/
├── package.json
├── playwright.config.js
├── .gitignore
├── .env
├── README.md
├── pages/
│   ├── base.page.js
│   ├── login.page.js
│   ├── dashboard.page.js
   └── profile.page.js
├── tests/
│   └── ui/
│       ├── login.spec.js
│       ├── dashboard.spec.js
│       └── profile.spec.js
├── fixtures/
│   └── auth.fixture.js
├── testData/
│   ├── users.json
│   └── profile.csv
├── utils/
│   ├── logger.js
│   ├── env.js
   └── helper.js
└── .github/
    └── workflows/
        └── ci.yml
```

## How to Install

```powershell
npm install
npx playwright install
```

## How to Run Tests

- Run all tests:

```powershell
npm test
```

- Run only UI tests:

```powershell
npm run test:ui
```

- Run tests in headed mode:

```powershell
npx playwright test --headed
```

- Run a single test file:

```powershell
npx playwright test tests/ui/login.spec.js
```

## Environment Variables (.env)

Create a `.env` file at the project root with values like:

```env
BASE_URL=https://example.com
ADMIN_USER=testuser
ADMIN_PASS=password123
```

Access via the env utility, e.g. `import env from './utils/env.js';` then `env.BASE_URL`.

## Data-Driven Test Files

Example `testData/users.json`:

```json
[
  { "username": "testuser1", "password": "pass1" },
  { "username": "testuser2", "password": "pass2" }
]
```

Example `testData/profile.csv`:

```csv
firstName,lastName
Dinesh,Muthu
John,Doe
```

## Framework Flow

1. Test files (high-level steps)
2. Fixtures (auth, setup)
3. Page Object Model (locators + UI actions)
4. Utilities (env, logger, helper, CSV)
5. Playwright test runner (+ HTML report)
6. GitHub Actions CI runs on push/pull requests

## GitHub Actions CI (example)

```yaml
name: UI Tests

on:
  push:
  pull_request:

jobs:
  ui_tests:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: Install dependencies
        run: npm install

      - name: Install browsers
        run: npx playwright install --with-deps

      - name: Run tests
        run: npm run test:ui
```

---

If you'd like, I can also:

- add badges (build/test coverage) at the top,
- update any project-specific commands in `package.json`, or
- generate a short CONTRIBUTING section.

If this looks good, I'll mark the README fix as complete.
