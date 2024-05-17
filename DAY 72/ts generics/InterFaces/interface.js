var Collection = /** @class */ (function () {
    function Collection() {
        this.data = [];
    }
    Collection.prototype.add = function (item) {
        this, this.data.push(item);
    };
    return Collection;
}());
var itemOne = new Collection();
itemOne.add({ itemType: "book", title: "Atom bomb", isbn: 1500 });
itemOne.add({ itemType: "Book ", title: "Follow your heart", isbn: 1566 });
console.log(itemOne);
var itemTwo = new Collection();
itemTwo.add({ itemType: "GAme", title: "Uncharted", style: "Action", price: 1589 });
console.log(itemTwo);
