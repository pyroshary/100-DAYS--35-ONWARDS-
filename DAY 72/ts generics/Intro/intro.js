function returnType(val) {
    return val;
}
var numValue = returnType(100);
var strValue = returnType("Elzero");
var boolValue = returnType(true);
var arrValue = returnType([1, 2, 3, 4]);
console.log("Number value : ".concat(numValue));
console.log("String value : ".concat(strValue));
console.log("Boolean type : ".concat(boolValue));
console.log("Aray value ".concat(arrValue));
