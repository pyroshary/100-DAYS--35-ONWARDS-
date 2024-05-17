class ProductExAcccessors{
    private _price : number;
    constructor(private id:number, private name:string){
        this._price=0;
    }
    get price():number{
        return this._price;
    }
    set price (newPrice:number){
        if (newPrice >= 0){
            this._price=newPrice;
        } else {console.log("price cannot be negative.");
        }
    }
    getProduction():string{
        return `Id : ${this.id}, name : ${this.name},price : ${this._price}`
    }
}

const productEx = new ProductExAcccessors(1,"widget");

console.log(productEx.getProduction());

productEx.price= -5;
