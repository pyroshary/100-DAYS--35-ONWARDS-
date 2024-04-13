var students = new Map();
students.set(1, "ali");
students.set(2, "rehman");
students.set(3, "kashif");
students.forEach(function (name, id) {
    console.log("Student ID: ".concat(id, ", Name: ").concat(name));
});
