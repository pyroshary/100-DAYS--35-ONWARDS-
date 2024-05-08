let username : string| null='Glitcher';
let ageEX: number |null=null;

function greetUser(username:string|null){
    if(username === null){
        console.log('Hello ! guest');    
    }
    else{console.log(`Hello ${username}!`);
    }
}

greetUser("Glitcherrr")
greetUser(null)