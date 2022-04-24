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
