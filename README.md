# qathingy-playwright

An exploration into automated software testing using [Playwright](https://playwright.dev/) and TypeScript.

## Features

- Cross-browser E2E testing (Chromium, Firefox, WebKit)
- TypeScript support
- Data-driven test cases
- Page Object Model structure
- Modern dev tooling (Prettier, TypeScript, etc.)

## Project Structure

```
.
├── common/
│   └── entities/
│       └── TestCaseData.ts
├── page-objects/
│   └── TestPage.ts
├── tests/
│   ├── e2e/
│   │   └── e2e-test.spec.ts
│   ├── test-data/
│   │   └── caseData.json
│   ├── example.spec.ts
│   ├── playwright.config.ts
│   └── e2e.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Install Playwright browsers:**
   ```sh
   npx playwright install
   ```

## Usage

### Run all tests (default config)
```sh
npx playwright test
```

### Run E2E tests with custom config
```sh
npx playwright test --config=tests/e2e.config.ts
```

### Run tests in headed mode (for debugging)
```sh
npx playwright test --headed
```

### Run tests for a specific browser
```sh
npx playwright test --project=Chromium
npx playwright test --project=Firefox
npx playwright test --project=Webkit
```

## Test Data

Test data for E2E tests is located in `tests/test-data/caseData.json`. You can add or modify test cases there.

## Extending Tests

- Add new test cases in `tests/e2e/e2e-test.spec.ts` or create new spec files in the `tests/e2e/` directory.
- Add new page objects in the `page-objects/` directory.
- Add new data models in `common/entities/`.

## Tooling

- **TypeScript** for type safety.
- **Prettier** for code formatting.
- **@playwright/test** for E2E testing.

## Troubleshooting

- If tests time out on external URLs, check your network connection or try running in headed mode.
- To debug network issues, try running a test against a local server (see commented example in `e2e-test.spec.ts`).
- If you add new dependencies, run `npm install` again.

## License

MIT

---

*Happy testing!*