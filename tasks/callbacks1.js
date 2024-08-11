// -> Exercise 1
// Create a function addTwo that accepts one input and adds 2 to it.

function addTwo() {}

// Exercise 1 execution <-
console.log(
    'Exercise 1', 
    addTwo(3)
    // should output 5
)
console.log('=====')

// -> Exercise 2
// Create a function addS that accepts one input and adds an "s" to it.

function addS() {}

// Exercise 2 execution <-
console.log(
    'Exercise 2',
    addS('cat')
    // should output "cats"
)
console.log('=====')

// -> Exercise 3
// Create a function called map that takes two inputs:
// an array of numbers (a list of numbers)
// a 'callback' function - a function that is applied to 
// each element of the array (inside of the function 'map')
// Have map return a new array filled with numbers that 
// are the result of using the 'callback' function on each 
// element of the input array.

function customMap() {}

// Exercise 3 execution <-
console.log(
    'Exercise 3', 
    customMap([1, 2, 3, 4, 5], (item) => item * 2)
    // should output [2, 4, 6, 8, 10]
)
console.log('=====')

// -> Exercise 4
// The function forEach takes an array and a callback, and 
// runs the callback on each element of the array. forEach 
// does not return anything.

function customForEach() {}

// Exercise 4 execution <-
console.log(
    'Exercise 4', 
    customForEach([1, 2, 3, 4, 5], (item) => item * 2)
    // should output undefined (forEach does not return anything)
)
console.log('=====')

// -> Exercise 5
// Rebuild your map function, this time instead of using a 
// for loop, use your own forEach function that you just defined. 
// Call this new function mapWith.

function mapWith() {}

// Exercise 5 execution <-
console.log(
    'Exercise 5',
    mapWith([1, 2, 3, 4, 5], (item) => item * 2)
    // should output [2, 4, 6, 8, 10]
)
console.log('=====')

// -> Exercise 6
// The function reduce takes an array and reduces the elements 
// to a single value. For example it can sum all the numbers, 
// multiply them, or any operation that you can put into a function.

function customReduce() {}

// Exercise 6 execution <-
console.log(
    'Exercise 6', 
    customReduce([1, 2, 3, 4, 5], (item1, item2) => item1 + item2, 0)
    // should output 15
)
console.log('=====')

// -> Exercise 7
// Construct a function intersection that compares input arrays 
// and returns a new array with elements found in all of the inputs. 
// BONUS: Use reduce!

function intersection() {}

// Exercise 7 execution <-
console.log(
    'Exercise 7', 
    intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
    // should output [ 15, 5 ]
)
console.log('=====')
