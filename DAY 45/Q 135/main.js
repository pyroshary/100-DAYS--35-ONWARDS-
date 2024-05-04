"use strict";
const person = {
    name: "Shary",
    age: 23,
    city: "Karachi"
};
const jsonStiring = JSON.stringify(person, null, 2);
console.log(jsonStiring);
