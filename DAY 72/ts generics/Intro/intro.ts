function returnType<T>(val:T): T{
    return val;
}

let numValue :number = returnType<number>(100);
 let strValue: string = returnType<string>("Elzero");
 let boolValue:boolean=returnType<boolean>(true);
 let arrValue:number[]= returnType<number[]>([1,2,3,4]);

 console.log(`Number value : ${numValue}`);
 console.log(`String value : ${strValue}`);
 console.log(`Boolean type : ${boolValue}`);
 console.log(`Aray value ${arrValue}`);
 
 
 
 
