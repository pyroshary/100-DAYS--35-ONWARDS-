interface person2
{
    name:string,
    age:number,
    greet(message:string):void
}

let staff:person2={
    name:"Shary",
    age:23,
  greet(message:string){
    console.log(` ${this.name} ${message}`);
    
  },

}
staff.greet("hello, stafff how are you?")
