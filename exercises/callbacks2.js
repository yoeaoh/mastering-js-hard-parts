// Exercise 8
// Construct a function union that compares input arrays and returns 
// a new array that contains all elements. If there are duplicate elements, 
// only add it once to the new array. Preserve the order of the elements 
// starting from the first element of the first input array. 
// BONUS: Use reduce!

// Exercise 9
// Construct a function objOfMatches that accepts two arrays and a callback. 
// objOfMatches will build an object and return it. To build the object, 
// objOfMatches will test each element of the first array using the callback 
// to see if the output matches the corresponding element (by index) of the 
// second array. If there is a match, the element from the first array becomes 
// a key in an object, and the element from the second array becomes 
// the corresponding value.

// Exercise 10
// Construct a function multiMap that will accept two arrays: an array of 
// values and an array of callbacks. multiMap will return an object whose keys 
// match the elements in the array of values. The corresponding values that are 
// assigned to the keys will be arrays consisting of outputs from the array of 
// callbacks, where the input to each callback is the key.

// Exercise 11
// Construct a function objectFilter that accepts an object as the first 
// parameter and a callback function as the second parameter. objectFilter will 
// return a new object. The new object will contain only the properties from 
// the input object such that the property's value is equal to the property's 
// key passed into the callback.