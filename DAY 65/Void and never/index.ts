//void and never

function looop(name:string) :void{
    console.log(`hey my name is ${looop}`);
    
}

function noretunValue():void{}
//Never

function abc():never{ 
    throw new Error('Hey how are you?');

}
function infiniteLopp(): never{
    while(true){}
}