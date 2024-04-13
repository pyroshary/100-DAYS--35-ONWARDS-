function checkGrade(grade: string):void{
    switch (grade){
        case "A" : console.log("Excellent");
        break;
        case "B" : console.log("Good");
        break;
        case "C" : console.log("Average");
        break;
        case "D" : console.log("BAd");
        break;
        case "F" : console.log("Fail");
        break;
        default:
        console.log("please select grade again")

    }
}

checkGrade("h")