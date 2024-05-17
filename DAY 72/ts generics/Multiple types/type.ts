function returnTypeEx<T>(val :T):T{
    return val;
}

console.log(returnTypeEx<number>(100));
console.log(returnTypeEx<string>("Shary"));

let returtypeArrowSyntax =<T>(val:T):T=>val;

console.log(returtypeArrowSyntax<number>(100));
console.log(returtypeArrowSyntax<string>("Shary"));

function testType<T>(val:T):string{
    return `The value is ${val} and the types is ${typeof val}`

}

console.log(testType<number>(100));

console.log(testType<string>("Shary"));

function multipleTypes <T,S>(valueOne :T,valueTWo:S):string{
    return `The first Value is ${valueOne} and the second value is ${valueTWo}`
}

console.log(multipleTypes<string,number>("SHARY",100));


console.log(multipleTypes<string,boolean>("SHARY",true));





