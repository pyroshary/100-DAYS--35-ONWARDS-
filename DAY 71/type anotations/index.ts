class product{
    id:number;
    name :string;
    price :number;
    constructor(id:number,
        name:string,
        price:number){
           this.id = id;
           this.name = name;
           this.price = price;
        }
   
        getProductInfo():string{
           return `Id: ${this.id}, Name: ${this.name}, price: $${this.price}`;
        }
}

let product1 = new product(1,"widget",20.0)

console.log(product1.getProductInfo());

