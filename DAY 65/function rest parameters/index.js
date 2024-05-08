"use strict";
//function rest parameters
Object.defineProperty(exports, "__esModule", { value: true });
function addAll(...nums) {
    let results = 0;
    for (let i = 0; i < nums.length; i++) {
        results += nums[i];
    }
    return results;
}
console.log(addAll(5, 10, 10, 20, 5));
