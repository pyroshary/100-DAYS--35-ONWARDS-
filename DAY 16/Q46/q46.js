"use strict";
let laptops = {
    make: "hp",
    model: "pro book",
    year: 2020,
    describe: function () {
        console.log(`THIS LAPTOP IS A ${this.year}${this.make} ${this.model}.`);
    },
};
laptops.describe();
