function returnTypeEx(val) {
    return val;
}
console.log(returnTypeEx(100));
console.log(returnTypeEx("Shary"));
var returtypeArrowSyntax = function (val) { return val; };
console.log(returtypeArrowSyntax(100));
console.log(returtypeArrowSyntax("Shary"));
function testType(val) {
    return "The value is ".concat(val, " and the types is ").concat(typeof val);
}
console.log(testType(100));
console.log(testType("Shary"));
function multipleTypes(valueOne, valueTWo) {
    return "The first Value is ".concat(valueOne, " and the second value is ").concat(valueTWo);
}
console.log(multipleTypes("SHARY", 100));
console.log(multipleTypes("SHARY", true));
