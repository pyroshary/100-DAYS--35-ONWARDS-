//optional and default parameters
function greetName(name, age) {
    if (age !== undefined) {
        console.log("Hey ".concat(name, " , your age is ").concat(age));
    }
    else {
        console.log("Hello ".concat(name, ", ").concat(age));
    }
}
greetName("aLi");
greetName('Shary', 20);
//default parameters
function ageGreato(name, age) {
    if (age === void 0) { age = 20; }
    console.log("Salam ".concat(name, ", you are ").concat(age, " years old"));
}
ageGreato('Shary');
ageGreato('Sheharyar ', 23);
