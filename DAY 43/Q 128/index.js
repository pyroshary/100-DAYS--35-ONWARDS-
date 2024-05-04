"use strict";
const multiplyParameters = (...numbers) => numbers.reduce((total, number) => total * number, 1);
console.log(multiplyParameters(2, 3, 4, 5));
