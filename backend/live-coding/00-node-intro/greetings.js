function sayHi(name) {
    console.log(`Hi, ${name}!`);
}
function sayBye(name) {
    console.log(`Bye, ${name}!`);
}

// exports.sayHi = sayHi;
// exports.sayBye = sayBye

module.exports = { sayHi, sayBye };
