class MyClassPublic {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const instancePublic = new MyClassPublic("John");
console.log(instancePublic.name); // Accessing the public property


class MyClassPrivate {
    private secret: string;

    constructor(secret: string) {
        this.secret = secret;
    }
    revealSecret(){
        console.log(this.secret);
        
    }
}

let instancePrivate= new MyClassPrivate("my secret")

instancePrivate.revealSecret();

class Parent{
    protected familyName :string;

    constructor(name:string){
        this.familyName=name;

    }
}

class Child extends Parent {
    introduceFamily() {
        console.log(`Our family name is ${this.familyName}`);
    }
}

const parentEx = new Parent("Smith");
const ChildEx =new Child("johnson")

ChildEx.introduceFamily()