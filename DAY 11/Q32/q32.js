"use strict";
//array of old user names
let oldusers = ["rehman", "imran", "kamran", "REHAN", "ali"];
//array of new user names
let newusers = ["ayesha", "alia", "zoya", "rehan", "hira"];
//loop for new users and printing message for both
newusers.forEach(new1user => {
    if (oldusers.some(olduser => olduser.toLowerCase() === new1user.toLowerCase())) {
        console.log(`sorry ${new1user} is not available`);
    }
    else {
        console.log(`Yes this username ${new1user} is available`);
    }
});
