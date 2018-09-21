# Jest Inspect Hooks

## Usage

In your `jest.config.js`:

```ts
module.exports = {
  // (Required) Ensures the use of the original `global.console`
  testEnvironment: "jest-inspect-hooks/testEnvironment/NodeEnvironment",

  // (Required) Ensures the use of the original `global.console`
  setupTestFrameworkScriptFile: "jest-inspect-hooks/setupTestFrameworkScriptFile",
  
  // (Optional) This will place a `debugger` statement at test completion
  // This allows you to inspect `console` logs before terminating the process
  globalTeardown: "jest-inspect-hooks/globalTeardown",
}
```

## Environments

```ts
module.exports = {
  testEnvironment: "jest-inspect-hooks/testEnvironment/NodeEnvironment",
  testEnvironment: "jest-inspect-hooks/testEnvironment/JsdomEnvironment",
}
```