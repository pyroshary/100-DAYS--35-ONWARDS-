"use strict";
function isleapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
console.log(isleapYear(2000));
console.log(isleapYear(1900));
