"use strict";
//print good morning if the time is before 12 Am
const currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("Good Morning");
}
