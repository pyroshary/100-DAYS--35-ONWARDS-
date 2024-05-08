var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var cites = ["japan", "iran", "turkey", "china"];
console.log("original order:", cites);
//to print array in alphabetical order with out modify
console.log("alphabatical order:", __spreadArray([], cites, true).sort());
// to print array in original order
console.log(" original order:", cites);
// to print array in reverse order without modify
console.log("reverse order :", __spreadArray([], cites, true).reverse());
//to print the array in original order
console.log(" original order:", cites);
// to print the array in origianl and change the original
console.log("original reverse:", cites.reverse());
// to print the array in reverse to show that its in orginal condition
console.log("back to original order:", cites.reverse());
//to print the array in original in alphabetical
console.log("original into alphabetical order:", cites.sort());
//to print array in reverse to origial again
console.log("original reverse:", cites.reverse());
