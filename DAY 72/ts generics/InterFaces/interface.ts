interface Book{
    itemType : string;
    title :string;
    isbn : number;
}

interface Game{
    itemType : string;
    title :string;
    style:string;
    price: number
}

class Collection<T>{
    public data:T[]=[];
    add(item:T):void{
        this,this.data.push(item)
    }
}

let itemOne = new Collection<Book>();

itemOne.add({itemType: "book",title:"Atom bomb",isbn:1500})
itemOne.add({itemType:"Book ",title:"Follow your heart",isbn: 1566})
console.log(itemOne);


let itemTwo = new Collection<Game>();

itemTwo.add({itemType:"GAme",title:"Uncharted",style:"Action",price:1589})

console.log(itemTwo);
