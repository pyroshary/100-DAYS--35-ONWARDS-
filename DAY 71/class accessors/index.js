var ProductExAcccessors = /** @class */ (function () {
    function ProductExAcccessors(id, name) {
        this.id = id;
        this.name = name;
        this._price = 0;
    }
    Object.defineProperty(ProductExAcccessors.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (newPrice) {
            if (newPrice >= 0) {
                this._price = newPrice;
            }
            else {
                console.log("price cannot be negative.");
            }
        },
        enumerable: false,
        configurable: true
    });
    ProductExAcccessors.prototype.getProduction = function () {
        return "Id : ".concat(this.id, ", name : ").concat(this.name, ",price : ").concat(this._price);
    };
    return ProductExAcccessors;
}());
var productEx = new ProductExAcccessors(1, "widget");
console.log(productEx.getProduction());
productEx.price = -5;
