var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var AbsractItem = /** @class */ (function () {
    function AbsractItem(id, name) {
        this.id = id;
        this.name = name;
    }
    AbsractItem.generateNextId = function () {
        return AbsractItem.nextId++;
    };
    AbsractItem.nextId = 1;
    return AbsractItem;
}());
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item(id, name) {
        return _super.call(this, id, name) || this;
    }
    Item.prototype.getItemInfo = function () {
        return "Id : ".concat(this.id, ", Name : ").concat(this.name);
    };
    return Item;
}(AbsractItem));
var item1 = new Item(AbsractItem.generateNextId(), "widget");
var item2 = new Item(AbsractItem.generateNextId(), "gadget");
console.log(item1.getItemInfo());
console.log(item2.getItemInfo());
