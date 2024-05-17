 class ProductImplementInterface{

    private static nextId:number =1;
    constructor(private id:number , private name :string){

    }

    static generateNextId():number{
        return ProductImplementInterface.nextId++
    }
    getProductInfo():string{
        return `ID : ${this.id}, Name: ${this.name}`
    }
 }

 let product1implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(),"widget")
 
 ;

 let product2implement = new ProductImplementInterface(ProductImplementInterface.generateNextId(),"widget");

console.log(product1implement.getProductInfo());

console.log(product2implement.getProductInfo());




