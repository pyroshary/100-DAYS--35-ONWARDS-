"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helloPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello , World!");
    }, 2000);
});
helloPromise.then((message) => console.log(message));
