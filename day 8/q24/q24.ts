//Storing applein uppercase
let uppercase = "MANGO";
let ten = 20;
let fifty = 50;
//making an aarray
let cars: string[]  =["corolla","toyota","honda","mercedies"];
//testing isequal to
console.log("apple" == "apple");
//testing is not equal to
console.log("apple" != "apple");
//checking mango case
console.log("checking mango in upper case");
//checking mango case
console.log(uppercase.toLowerCase() == "mango" );
//checking mango case
console.log("checking mango in lower case");
//checking mango case
console.log(uppercase.toLowerCase() != "mango" );
//checking numericals
console.log("is both variables are equal to each other?");
console.log(ten == fifty );


console.log("is both variables are not equal to each other?");
console.log(ten != fifty );


console.log("is variable is greator than 0?");
console.log(ten > 0);

console.log("is variable is lessthan 0?");
console.log(ten < 0);

console.log("is variable is equal to 10?");
console.log(ten = 10);

//checking double operators
console.log("is variable is lessthan 0 and is variable is greator than 0 ");
console.log(ten < 0 && ten<0);

console.log("is variable is equal to  0 and is variable is not equal to 0 ");
console.log(ten == 0 && ten != 0);

console.log("is variable is equal to  0 or is variable is not equal to 0 ");
console.log(ten == 0 || ten != 0);

//checking item in an array
console.log("Is Honda is availabe in my array?")
console.log(cars.includes("honda"));

console.log("Is civic is availabe in my array?")
console.log(cars.includes("civic"));


