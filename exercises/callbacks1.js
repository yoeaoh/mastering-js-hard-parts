const testArray = [1, 2, 3, 4, 5]

// Exercise 1
// Create a function addTwo that accepts one input and adds 2 to it.

function addTwo(number) {
    return number + 2
}

// Exercise 2
// Create a function addS that accepts one input and adds an "s" to it.

function addS(string) {
    return string + 's'
}

// Exercise 3
// Create a function called map that takes two inputs:
// an array of numbers (a list of numbers)
// a 'callback' function - a function that is applied to 
// each element of the array (inside of the function 'map')
// Have map return a new array filled with numbers that 
// are the result of using the 'callback' function on each 
// element of the input array.

function customMap(array, callback) {
    const newArray = []

    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]))
    }

    return newArray
}

// Exercise 4
// The function forEach takes an array and a callback, and 
// runs the callback on each element of the array. forEach 
// does not return anything.

function customForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i])
    }
}

// Exercise 5
// Rebuild your map function, this time instead of using a 
// for loop, use your own forEach function that you just defined. 
// Call this new function mapWith.

function mapWith(array, callback) {
    const newArray = []

    customForEach(array, (item) => {
        newArray.push(callback(item))
    })

    return newArray
}

// Exercise 6
// The function reduce takes an array and reduces the elements 
// to a single value. For example it can sum all the numbers, 
// multiply them, or any operation that you can put into a function.

function customReduce(array, callback, initialValue) {
    let result = initialValue ?? 0

    customForEach(array, (currentItem) => result = callback(result, currentItem))

    return result
}

// Exercise 7
// Construct a function intersection that compares input arrays 
// and returns a new array with elements found in all of the inputs. 
// BONUS: Use reduce!

function intersection(...arrays) {
    return arrays.reduce((accValue, currentValue) => {
        if (!accValue.length) return currentValue
        return currentValue.filter((item) => accValue.includes(item))
    }, [])
}

// Exercise 1 call
console.log('Exercise 1', addTwo(5))
console.log('=====')

// Exercise 2 call
console.log('Exercise 2', addS('cat'))
console.log('=====')

// Exercise 3 call
console.log('Exercise 3', customMap(testArray, (item) => item * 2))
console.log('=====')

// Exercise 4 call
console.log('Exercise 4', customForEach(testArray, (item) => item * 2))
console.log('=====')

// Exercise 5 call
console.log('Exercise 5', mapWith(testArray, (item) => item * 2))
console.log('=====')

// Exercise 6 call
console.log('Exercise 6', customReduce(testArray, (item1, item2) => item1 + item2, 0))
console.log('=====')

// Exercise 6 call
console.log('Exercise 7', intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]))
console.log('=====')


