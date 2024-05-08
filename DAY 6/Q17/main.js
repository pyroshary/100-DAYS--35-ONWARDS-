"use strict";
//making the guest list array
let guestlist = ["ali", "rehman", "kamran", "sana"];
//to print big table news
console.log("great new i have founnd a bigeer table!");
//to reomve rehman and add hania
guestlist.splice(0, 1, "hania");
//adding more guest in start of array
guestlist.unshift("shary");
guestlist.push("alia");
//adding guest in center of array
let middleindex = Math.floor(guestlist.length / 2);
guestlist.splice(middleindex, 0, "marium");
//adding guest in end of array
//to print message
guestlist.forEach(guest => (console.log(`dear ${guest} i would like to invite you on a dinner would you like to join me?`)));
console.log("hey sorry i am canceling dineer for some of you?");
//usin while loop to remove invited guests
while (guestlist.length > 2) {
    let removedguest = guestlist.pop();
    console.log(`Hey sorry ${removedguest}, i am having issues that my bi table will not come at a time so you are not invited `);
}
console.log("invitations to the last two guest");
guestlist.forEach(lasttwo => console.log(`hey ${lasttwo} you are still invited in the party make sure to join at the time`));
//to removing last two names from the array
guestlist.pop();
guestlist.pop();
//to print empty list
console.log("empty list", guestlist);
