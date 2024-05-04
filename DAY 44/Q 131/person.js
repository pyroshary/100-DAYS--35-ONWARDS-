"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
class person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello. my name is ${this.name}`);
    }
}
exports.person = person;
