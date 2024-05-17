class User<T= string>{
    constructor(public value: T){}

    show(msg:T):void{
        console.log(`${msg} - ${this.value}`);
        
    }
}

let userOne = new User<string>("Shary");
console.log(userOne.value);;
userOne.show("message");

let userTwo = new User<number |  string>(100);

console.log(userTwo.value);

userTwo.show("message")
