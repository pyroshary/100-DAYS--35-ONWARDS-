function categorizeAge (age :number):string{
    if(age<= 5) {
        return "BABY"
    }
    else if (age <= 14 ){
        return "TEEN AGER"

    }
    else if (age <= 18 ){
        return "YOUNG"

    }
    else {
        return "ADULT"
    }
    
}

console.log(categorizeAge(3));
console.log(categorizeAge(10))
console.log(categorizeAge(17))
console.log(categorizeAge(70))