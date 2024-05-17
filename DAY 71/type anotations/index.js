var product = /** @class */ (function () {
    function product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    product.prototype.getProductInfo = function () {
        return "Id: ".concat(this.id, ", Name: ").concat(this.name, ", price: $").concat(this.price);
    };
    return product;
}());
var product1 = new product(1, "widget", 20.0);
console.log(product1.getProductInfo());
