"use strict";
console.log("Before synchronous operation");
for (let i = 0; i < 1e9; i++) { }
console.log("After synchronous operation");
//asynchronous
console.log("Before asynchronous operation");
setTimeout(() => {
    console.log("Asynchronous operation completed");
}, 1000);
console.log("AFTER ASYNCHRONOUS OPERTION SETUP");
