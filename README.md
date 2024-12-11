On `npm run test` we get:

```
 FAIL  __tests__/index.test.ts
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    /{REDACTED}/expo-jest-test/node_modules/uuid/dist/esm-browser/index.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){export { default as v1 } from './v1.js';
                                                                                      ^^^^^^

    SyntaxError: Unexpected token 'export'

    > 1 | import { Keypair } from "@solana/web3.js";
        | ^
      2 |
      3 | test("test", () => {
      4 |   const keypair = Keypair.generate();

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1505:14)
      at Object.<anonymous> (__tests__/index.test.ts:1:1)

 PASS  components/__tests__/ThemedText-test.tsx

Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 passed, 1 total
Snapshots:   1 passed, 1 total
Time:        0.44 s, estimated 1 s
Ran all test suites.
```
