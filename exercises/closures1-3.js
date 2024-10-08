// ===
// -> Exercise 3
// Now create a function addByX that returns a function that 
// will add an input by x.

function addByX(increaseBy) {
    return (initialValue) => initialValue + increaseBy
}

// ===
// => Exercise 3 execution
console.log('Exercise 3')

const addByTwo = addByX(2);
console.log(addByTwo(1));
// * should return 3
console.log(addByTwo(2));
// * should return 4
console.log(addByTwo(3));
// * should return 5

const addByThree = addByX(3);
console.log(addByThree(1));
// * should return 4
console.log(addByThree(2));
// * should return 5

const addByFour = addByX(4);
console.log(addByFour(4));
// * should return 8
console.log(addByFour(5));
// * should return 9

console.log('=====')

// ===
// ===
// ===