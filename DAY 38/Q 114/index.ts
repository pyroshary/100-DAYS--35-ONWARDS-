const students = new Map<number,string>();
students.set(1,"ali")
students.set(2,"rehman")
students.set(3,"kashif");

students.forEach((name, id) => {
    console.log(`Student ID: ${id}, Name: ${name}`);
  });