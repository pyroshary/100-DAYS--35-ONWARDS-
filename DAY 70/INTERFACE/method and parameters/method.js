var staff = {
    name: "Shary",
    age: 23,
    greet: function (message) {
        console.log("hey ".concat(this.name, " ").concat(message));
    },
};
staff.greet("hello, stafff how are you?");
// const Sarah: PersonEx2 = {
//     name: "Sarah",
//     age: 30,
//     greet(message: string) {
//       console.log(`${this.name} says: ${message}`);
//     },
//   };
//   Sarah.greet("Hello, TypeScript!");
