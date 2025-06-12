# Modules

In large applications, it's important to split our code into multiple files, each known as a module. Using modules provides several advantages:

1. Improved maintainability – The code is better organized, making it easier to understand, update, and debug.

2. Code reusability – We can reuse one or more modules in different parts of the application, reducing duplication.

3. Abstraction – Modules allow us to hide complex logic and expose only the necessary parts, making the overall system simpler to work with.

## History of Modules

In ES5, JavaScript did not have built-in support for modules. To solve this limitation, developers introduced custom module formats—syntaxes used to define and organize modular code.

The most popular module formats were:

- **AMD (Asynchronous Module Definition)** – Primarily used in browser-based applications.

- **CommonJS** – Commonly used in Node.js environments.

- **UMD (Universal Module Definition)** – Designed to work in both browser and Node.js environments.

These module formats helped structure code in ES5. However, starting with ES6, JavaScript introduced **native support for modules** (commonly referred to as **ES6 Modules**), making modular development a built-in language feature.
