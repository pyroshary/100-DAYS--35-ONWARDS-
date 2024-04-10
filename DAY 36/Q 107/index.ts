function isDivisible(number :number): boolean{
    return number%2 === 0 && number % 3 === 0;
}

console.log(isDivisible(20));
console.log(isDivisible(12))