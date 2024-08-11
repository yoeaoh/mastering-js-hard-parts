// ===
// -> Exercise 1
// Create a function createFunction that creates and returns
// a function. When that created function is called, it should 
// print "hello".

function createFunction() {
    return () => console.log('hello')
}

// ===
// => Exercise 1 execution
console.log('Exercise 1')

const function1 = createFunction();
function1();
// * should console.log('hello');

console.log('=====')

// ===
// ===
// ===