function daysoftheWeek (daynumber:number) : void{
    switch(daynumber){
        case 1: 
        console.log("SUNDAY");
        break;

        case 2: 
        console.log("MONDAY");
        break;

        case 3: 
        console.log("TUESDAY");
        break;

        case 4: 
        console.log("WEDNESDAY");
        break;

        case 5: 
        console.log("THURSDAY");
        break;

        case 6: 
        console.log("FRIDAY");
        break;

        case 7: 
        console.log("SATURAY");
        break;

        default :
        console.log("Invalid number")
    }
}

daysoftheWeek(5);