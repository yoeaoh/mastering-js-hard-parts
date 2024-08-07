// -> Exercise 8
// Construct a function union that compares input arrays and returns 
// a new array that contains all elements. If there are duplicate elements, 
// only add it once to the new array. Preserve the order of the elements 
// starting from the first element of the first input array. 
// BONUS: Use reduce!

function setArrays(...arrays) {
    return arrays.reduce((acc, current) => {
        const newArray = acc

        for (let i = 0; i < current.length; i++) {
            if (!newArray.includes(current[i])) {
                newArray.push(current[i])
            }
        }

        return newArray
    }, [])
}

// Exercise 8 execution <-
console.log(
    "Exercise 8", 
    setArrays([1,2,3], [3,4,5,6,6], [1,2,3,6,6,7,7,7,8,9,9,9])
)
console.log('=====')

// -> Exercise 9
// Construct a function objOfMatches that accepts two arrays and a callback. 
// objOfMatches will build an object and return it. To build the object, 
// objOfMatches will test each element of the first array using the callback 
// to see if the output matches the corresponding element (by index) of the 
// second array. If there is a match, the element from the first array becomes 
// a key in an object, and the element from the second array becomes 
// the corresponding value.

function objOfMatches(arrayOne, arrayTwo, callback) {
    const resultObject = {}

    for (let i = 0; i < arrayOne.length; i++) {
        if (callback(arrayOne[i]) === arrayTwo[i]) {
            resultObject[arrayOne[i]] = arrayTwo[i]
        }
    }

    return resultObject
}

// Exercise 9 execution <-
console.log(
    "Exercise 9",
    objOfMatches(
        ["hi", "bye", "later", "hello"], // hello dont match after uppercasing
        ["HI", "BYE", "LATER", "hello"],
        function (str) {
                return str.toUpperCase();
        }
    )
)
console.log('=====')

// -> Exercise 10
// Construct a function multiMap that will accept two arrays: an array of 
// values and an array of callbacks. multiMap will return an object whose keys 
// match the elements in the array of values. The corresponding values that are 
// assigned to the keys will be arrays consisting of outputs from the array of 
// callbacks, where the input to each callback is the key.

function multiMap(valuesArray, callbacksArray) {
    return valuesArray.reduce((acc, currentValue) => {
        const newAcc = acc

        newAcc[currentValue] = callbacksArray.map(callbackItem => callbackItem(currentValue))

        return newAcc
    }, {})
}

// Exercise 10 execution <-
console.log(
    "Exercise 10",
    multiMap(
        ["catfood", "glue", "beer"],
        [
            function (str) {
                return str.toUpperCase()
            },
            function (str) {
                return str[0].toUpperCase() + str.slice(1).toLowerCase()
            },
            function (str) {
                return str + str
            },
        ]
    )
)
console.log('=====')

// -> Exercise 11
// Construct a function objectFilter that accepts an object as the first 
// parameter and a callback function as the second parameter. objectFilter will 
// return a new object. The new object will contain only the properties from 
// the input object such that the property's value is equal to the property's 
// key passed into the callback.

function objectFilter(obj, callback) {
    return Object.entries(obj).filter((item) => item[1] === callback(item[0]))
}

// Exercise 11 execution <-
console.log(
    "Exercise 11",
    objectFilter({
        London: "LONDON",
        LA: "Los Angeles",
        Paris: "PARIS",
    }, (city) => city.toUpperCase())
);
console.log('=====')
