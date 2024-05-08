function sandwitches() {
    var peoples = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        peoples[_i] = arguments[_i];
    }
    console.log("i am going to make a sandwitch for ".concat(peoples.join(','), "."));
}
sandwitches("haris");
sandwitches("haris", "and", "kshf");
