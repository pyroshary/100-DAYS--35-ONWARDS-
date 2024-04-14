var _this = this;
var traditionalVSarrow = {
    value: "traditionalVSarrow value",
    traditonalFunction: function () {
        console.log("Traditonl Function:", this.value);
    },
    arrowFunction: function () {
        console.log("Arrow functon:", _this.value);
    },
};
traditionalVSarrow.traditonalFunction();
traditionalVSarrow.arrowFunction();
