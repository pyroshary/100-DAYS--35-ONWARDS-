const countries = new  Map<string , string>()

countries.set("USA","Washington, D.c")

countries.set("JAPAN","TOKYO")

countries.set("FRANCE","PARIS")

countries.set("PAKISTAN","KARACHI")

console.log(countries);


//answerof q 113

function capitalofCanada(countries:Map<string,string>): void{
    if(countries.has("PAKISTAN")){
        console.log(`The capital of PAkistan is ${countries.get("PAKISTAN")}`);
    }
    else {
        console.log("pakistan is not in your map")
    }
}

capitalofCanada(countries);