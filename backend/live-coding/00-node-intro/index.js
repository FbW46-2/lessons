console.log('hi');

console.log(process.argv);
// process.argv returns an array
// process.argv[0]: path to the Node executable
// process.argv[1]: path to the current file
// rest of array elements: user inputs

const inputs = process.argv.slice(2);
console.log(inputs);

const nums = inputs.map(str => parseInt(str));
console.log(nums);

// Node's Module System
// there are 4 kinds of modules in Node:
// 1. global modules (console, process)
// - no need to install them
// - no need to import (require) them
// 2. built-in (core) modules (fs, path)
// - no need to install them
// - need to require
// 3. third-party modules (from npm registry)
// - need to install
// - need to require
// 4. your own modules
// - no need to install
// - need to require

// 1. global modules:
// console.log('Yes, I am a module!');
// const args = process.argv.slice(2);

// 2. core modules
const fs = require('fs');

// 3. third-party modules
const validator = require('validator');
console.log(validator.isURL('https://news.ycombinator.com'));

// 4. your own modules
let greetings = require('./greetings.js');
let name = require('./name.js');

let sayHi = greetings.sayHi;
let sayBye = greetings.sayBye;

console.log(sayHi(name));