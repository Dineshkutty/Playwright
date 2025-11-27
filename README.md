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
✓ Installs browsers in CI

✔ Fully ready to upload to GitHub
📁 Folder Structure
playwright-ui-framework-js/
│
├── package.json
├── playwright.config.js
├── .gitignore
├── .env
├── README.md
│
├── pages/
│ ├── base.page.js
│ ├── login.page.js
│ ├── dashboard.page.js
│ └── profile.page.js
│
├── tests/
│ └── ui/
│ ├── login.spec.js
│ ├── dashboard.spec.js
│ └── profile.spec.js
│
├── fixtures/
│ └── auth.fixture.js
│
├── testData/
│ ├── users.json
│ └── profile.csv
│
├── utils/
│ ├── logger.js
│ ├── env.js
│ └── helper.js
│
└── .github/
└── workflows/
└── ci.yml

🧪 How to Install
npm install
npx playwright install

▶️ How to Run Tests
Run all tests:
npm test

Run only UI tests:
npm run test:ui

Run with headed mode:
npx playwright test --headed

Run one test:
npx playwright test tests/ui/login.spec.js

🔧 Environment Variables (.env)
BASE_URL=https://example.com
ADMIN_USER=testuser
ADMIN_PASS=password123

Use anywhere via:

import env from '../utils/env.js';
env.BASE_URL;

📝 Data-Driven Test Files
JSON: testData/users.json
[
{ "username": "testuser1", "password": "pass1" },
{ "username": "testuser2", "password": "pass2" }
]

CSV: testData/profile.csv
firstName,lastName
Dinesh,Muthu
John,Doe

📐 Framework Flow Diagram
┌──────────────────────────┐
│ Test Files │
│ (High-level test steps) │
└─────────────┬────────────┘
│
▼
┌──────────────────────────┐
│ Fixtures │
│ (Auth, Login setup) │
└─────────────┬────────────┘
│
▼
┌───────────────────────────┐
│ Page Object Model │
│ (Locators + UI Actions) │
└──────────────┬────────────┘
│
▼
┌───────────────────────────┐
│ Utilities │
│ Env, Logger, Helper, CSV │
└──────────────┬────────────┘
│
▼
┌───────────────────────────┐
│ Playwright Test Runner │
│ + HTML Report │
└──────────────┬────────────┘
│
▼
┌───────────────────────────┐
│ GitHub Actions CI │
│ Auto-run on every push │
└───────────────────────────┘

🤖 GitHub Actions CI

Runs on every push:

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
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Install browsers
        run: npx playwright install --with-deps

      - name: Run tests
        run: npm run test:ui
