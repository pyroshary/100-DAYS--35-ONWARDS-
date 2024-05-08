//optional and default parameters

function greetName(name:string,age? :number)
{
    if (age !== undefined) {console.log(`Hey ${name} , your age is ${age}`);
    } else{
        console.log(`Hello ${name}, ${age}`);
        
    }
}

greetName("aLi")
greetName('Shary',20)


//default parameters

function ageGreato (name: string, age:number = 20){
    console.log(`Salam ${name}, you are ${age} years old`);
    
}
ageGreato('Shary')
ageGreato('Sheharyar ', 23)