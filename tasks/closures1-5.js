// ===
// -> Exercise 5
// Write a function after that takes the number of times the 
// callback needs to be called before being executed as the 
// first parameter and the callback as the second parameter.

function after() {}

// ===
// => Exercise 5 execution
console.log('Exercise 5')

const called = function () {
    console.log("hello");
};
const afterCalled = after(3, called);

afterCalled();
// * nothing is printed
afterCalled(); 
// * nothing is printed
afterCalled(); 
// * 'hello' is printed

console.log('=====')

// ===
// ===
// ===
