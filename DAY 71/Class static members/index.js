var ProductStaticMembers = /** @class */ (function () {
    function ProductStaticMembers(id, name) {
        this.id = id;
        this.name = name;
    }
    ProductStaticMembers.genrateNextId = function () {
        return ProductStaticMembers.nextId++;
    };
    ProductStaticMembers.prototype.getProductInfo = function () {
        return "ID : ".concat(this.id, " , Name :").concat(this.name);
    };
    ProductStaticMembers.nextId = 1;
    return ProductStaticMembers;
}());
var product1static = new ProductStaticMembers(ProductStaticMembers.genrateNextId(), "Widget");
var product2static = new ProductStaticMembers(ProductStaticMembers.genrateNextId(), "Gadget");
console.log(product1static.getProductInfo());
console.log(product2static.getProductInfo());
