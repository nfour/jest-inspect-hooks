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

## VSCode

Try this launch.json:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "name": "Jest Inspect",
      "request": "launch",
      "protocol": "inspector",
      "args": [ "--runInBand" ],
      "console": "internalConsole",
      "autoAttachChildProcesses": true,
      "smartStep": true,
      "program": "${workspaceFolder}/node_modules/jest/bin/jest"
    }
  ]
}
  
```

## Environments

```ts
module.exports = {
  testEnvironment: "jest-inspect-hooks/testEnvironment/NodeEnvironment",
  testEnvironment: "jest-inspect-hooks/testEnvironment/JsdomEnvironment",
}
```