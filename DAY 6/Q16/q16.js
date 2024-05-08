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
guestlist.forEach(guest => (console.log(`dear ${guest} i woulsd like to invite you on a dinner would you like to join me?`)));
