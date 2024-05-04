"use strict";
function stringsEqual(str1, str2) {
    return str1.toLocaleLowerCase() === str2.toLocaleLowerCase();
}
console.log(stringsEqual("HELLO GUYS", "hello guys"));
console.log(stringsEqual("WORLD", "word"));
