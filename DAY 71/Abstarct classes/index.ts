abstract class AbsractItem{
    private static nextId:number =1;

    constructor(public id:number, protected name:string){}
    static generateNextId():number{
        return AbsractItem.nextId++
    }
    abstract getItemInfo():string;
}

class Item extends AbsractItem{
    constructor (id:number, name :string){
        super(id,name)
    }

    getItemInfo(): string {
        return `Id : ${this.id}, Name : ${this.name}`
    }
}

let item1 : AbsractItem = new Item(AbsractItem.generateNextId(),"widget")
let item2 : AbsractItem = new Item(AbsractItem.generateNextId(),"gadget")

console.log(item1.getItemInfo());
console.log(item2.getItemInfo());