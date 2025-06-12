To install Babel, we should install Node. npm comes with Nod
npm is a tool that we use to install third-party libraries and tools.

First, initialize Node project and install Babel:

```bash
npm i babel-cli@6.26.0 babel-core@6.26.0 babel-preset-env@1.6.1 --save-dev
```

- **babel-cli** is the Babel's command-line interface. It is the tool that we run from the command line (like npm), so we run it from the command line and give it the name of our JavaScript file. Then it will convert or compile the JavaScript code.

- **babel-core** is basically the core of Babel where all the logic for transpiling code is implemented.

- **babel-preset**: In Babel, we have a plugin for every new JavaScript feature starting from ES6 (e.g., plugin for `let/const`, arrow functions). If we need to use only two of the new features, we can install only those two plugins. But if you need more flexibility, you can install presets. A preset is basically the combination of all these plugins. So it understands all the new features in JavaScript starting from ES6.
