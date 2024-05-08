"use strict";
function makecar(company, model, ...options) {
    let car = { company, model };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(makecar("mercidres", "benz", ["color", "purple"], ["year", "2020"]));
