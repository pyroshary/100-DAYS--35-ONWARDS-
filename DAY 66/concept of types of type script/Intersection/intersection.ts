type teacher={
    name:string,
    emplpoyeID: number,
    age:number,
    email:string
}

type student={
    name:string,
    studentID: number,
    age:number,
    email:string
}
type mix = student & teacher

let ali :mix={
    name:"Ali",
    studentID: 900,
    emplpoyeID:1234,
    age:30,
    email:'aliabcd@gmail.com'
}

console.log(ali);
