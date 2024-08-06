// -> Exercise 12
// Create a function majority that accepts an array and a callback. 
// The callback will return either true or false. majority will iterate 
// through the array and perform the callback on each element until it 
// can be determined if the majority of the return values from the 
// callback are true. If the number of true returns is equal to the 
// number of false returns, majority should return false.

function majority() {}

// -> Exercise 13
// Create a function prioritize that accepts an array and a callback. 
// The callback will return either true or false. prioritize will 
// iterate through the array and perform the callback on each element, 
// and return a new array, where all the elements that yielded a return 
// value of true come first in the array, and the rest of the elements 
// come second.

function prioritize() {}

// -> Exercice 14
// Create a function countBy that accepts an array and a callback, 
// and returns an object. countBy will iterate through the array and 
// perform the callback on each element. Each return value from the 
// callback will be saved as a key on the object. The value associated 
// with each key will be the number of times that particular return 
// value was returned.

function countBy() {}

// -> Exercise 15
// Create a function groupBy that accepts an array and a callback, and 
// returns an object. groupBy will iterate through the array and perform 
// the callback on each element. Each return value from the callback will 
// be saved as a key on the object. The value associated with each key 
// will be an array consisting of all the elements that resulted in that 
// return value when passed into the callback.

function groupBy() {}

// -> Exercise 16
// Create a function goodKeys that accepts an object and a callback. 
// The callback will return either true or false. goodKeys will iterate 
// through the object and perform the callback on each value. goodKeys will 
// then return an array consisting only the keys whose associated values 
// yielded a true return value from the callback.

function goodKeys() {}

// ===
// ===
// ===
// === execution ===
// ===
// ===
// ===

// Exercise 12 <-
const isOdd = function (num) {
    return num % 2 === 1
}
console.log("Exercise 12", majority([1, 2, 3, 4, 5, 7, 9, 11], isOdd))

// Exercise 13 <-
const startsWithS = function (str) {
    return str[0] === "s" || str[0] === "S"
}
console.log(
    "Exercise 13", 
    prioritize(
        ["curb", "rickandmorty", "seinfeld", "sunny", "friends"],
        startsWithS
    )
)

// Exercise 14 <-
console.log(
    "Exercise 14",
    countBy([1, 2, 3, 4, 5], function (num) {
        if (num % 2 === 0) return "even";
        else return "odd";
    })
);

// Exercise 15 <-
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
    return Math.floor(num)
}
console.log("Exercise 15", groupBy(decimals, floored))

// Exercise 16 <-
const sunny = {
    mac: "priest",
    dennis: "calculating",
    charlie: "birdlaw",
    dee: "bird",
    frank: "warthog",
}
const startsWithBird = function (str) {
    return str.slice(0, 4).toLowerCase() === "bird"
}
console.log("Exercise 16", goodKeys(sunny, startsWithBird))
