"use strict";
const helloPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello , World!");
    }, 2000);
});
helloPromise.then((message) => console.log(message));
