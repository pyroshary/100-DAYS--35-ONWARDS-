interface personData {
    name:string;
    age: number

}

type personData2 ={
    name:string;
    age: number
    
}

interface AnimalEcinterface{
    type:string
}

interface Dog extends AnimalEcinterface{
    bark():void;
}

class Labrador implements Dog{
    type: string="dog";
    bark() {
        console.log("woof!");
        
    }
}

type animalExtype ={
    type:string;
};

type Monkey = animalExtype & {
    bark():void
}

const Labrador:Monkey={
    type:"monkey",
    bark(){
        console.log("woof!");
        
    },

}

interface Car{
    model:string;
}

const myCar:Car={
    brand : "Toyota",
    model : "camry"
};