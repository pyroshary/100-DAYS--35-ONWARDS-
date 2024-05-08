function makecar(company:string, model:string,...options:[string,any][]):object{
    let car={company,model};
    options.forEach(([key ,value])=>car[key]=value);
    return car;
}

console.log(makecar  ("mercidres","benz",["color","purple"], ["year" ,"2020"]));