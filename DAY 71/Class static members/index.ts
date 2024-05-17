class ProductStaticMembers {
    private static nextId: number =1;

    constructor(private id :number, private name:string){}

    static genrateNextId():number{
        return ProductStaticMembers.nextId++
    }
    getProductInfo(): string{
        return `ID : ${this.id} , Name :${this.name}`
    }
}
const product1static = new ProductStaticMembers(
    ProductStaticMembers.genrateNextId(),
    "Widget"
 );
 const product2static = new ProductStaticMembers(
    ProductStaticMembers.genrateNextId(),
    "Gadget"
 );

 console.log(product1static.getProductInfo());
console.log(product2static.getProductInfo());

 