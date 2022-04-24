## Install

To begin, use the commandline to install the package as a dev-dependency.

```js
npm install --save-dev @interc0der/tsconfig
//or
yarn add -D @interc0der/tsconfig
```

## Usage

To build with this base typescript configuration, use extending within the tsconfig.json file located in the root directory of your projects.

```js
@filename: tsconfig.json
{
    extends: "@interc0der/tsconfig"
}
```

## Templates

To build with this base typescript configuration, use extending within the tsconfig.json file located in the root directory of your projects.

```js
@filename: tsconfig.json
{
    extends: "@interc0der/tsconfig/template/tsconfig.react.json"
}
```

List of optional templates

- tsconfig.base.json
- tsconfig.react.json
- tsconfig.legacy.json
- tsconfig.minimal.json
- tsconfig.verbose.json
- tsconfig.debugger.json (testing)
- tsconfig.goofy.json (testing)

For more details about each template, see [Template](https://interc0der.github.io/tsconfig/#/templates)

## Custom Template

tsconfig has code to test custom templates and inspect how the output will look. To run testing on a custom configuration, save the configuration within ./test/config

```
├── test
│   ├── config
│   │   ├── tsconfig.base.json
│   │   ├── tsconfig.react.json
│   │   ├── ...
│   │   ├── [ your.custom.json ]
│   ├── dist
│   ├── node_modules
│   ├── scripts
│   ├── tests
│   ├── types
│   ├── index.ts
│   ├── jest.config.js
│   ├── tsconfig.json
│   ├── tsconfig.test.json
│   ├── yarn.lock
│   ├── package.json
├── docs
├── template
```

## Test

The test folder is structure for jest unit testing. See ./test/test/\* for the test we will run with the configurations.

### Get Started

```js
yarn install
```

### Run full test

```js
yarn test
```

### Run test with custom templates

```js
yarn test:all
```

Hopefully you see a PASSING jest output!
