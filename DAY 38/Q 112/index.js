"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const countries = new Map();
countries.set("USA", "Washington, D.c");
countries.set("JAPAN", "TOKYO");
countries.set("FRANCE", "PARIS");
countries.set("PAKISTAN", "KARACHI");
console.log(countries);
//answerof q 113
function capitalofCanada(countries) {
    if (countries.has("PAKISTAN")) {
        console.log(`The capital of PAkistan is ${countries.get("PAKISTAN")}`);
    }
    else {
        console.log("pakistan is not in your map");
    }
}
capitalofCanada(countries);
