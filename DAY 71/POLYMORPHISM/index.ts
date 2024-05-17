abstract class AbstractEntity{
    private static nextId : number =1;
    protected constructor(public id:number, protected name:string){}
    static generateNextId():number{
        return AbstractEntity.nextId++
    }
    abstract getEntityInfo():string
}

class Entity extends AbstractEntity{
    constructor(id:number , name:string){
        super(id,name);
    }
    getEntityInfo(): string {
        return `ID: ${this.id}, name: ${this.name}`
        
    }
}

class AnotherEntity extends AbstractEntity{
    constructor (id:number , name:string){
        super(id,name);
    }
    getEntityInfo(): string {
        return `ID: ${this.id}, name: ${this.name}`
        

}
}

let entity1 : AbstractEntity =new Entity(
    AbstractEntity.generateNextId(),"widget"
)

let entity2 : AbstractEntity =new Entity(
    AbstractEntity.generateNextId(),"gadget"
)

console.log(entity1.getEntityInfo());
console.log(entity2.getEntityInfo());
