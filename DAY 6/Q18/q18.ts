let cites: string[]=  [ "japan","iran","turkey","china"];
console.log("original order:" ,cites);
//to print array in alphabetical order with out modify
console.log("alphabatical order:",[...cites].sort());
// to print array in original order
console.log(" original order:",cites);
// to print array in reverse order without modify
console.log("reverse order :",[...cites].reverse());
//to print the array in original order
console.log(" original order:",cites);
// to print the array in origianl and change the original
console.log("original reverse:",cites.reverse());
// to print the array in reverse to show that its in orginal condition
console.log("back to original order:",cites.reverse());
//to print the array in original in alphabetical
console.log("original into alphabetical order:",cites.sort());
//to print array in reverse to origial again
console.log("original reverse:",cites.reverse());