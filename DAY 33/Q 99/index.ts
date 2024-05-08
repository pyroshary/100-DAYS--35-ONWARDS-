function getnextBirthday(month:number , day:number): Date{
    const today = new Date();
    let year = today.getFullYear();
    const birthday = new Date(year,month -1,day);
    if (birthday< today){
        birthday.setFullYear(year + 1);
    }
    return birthday;
}

const nextBirthday = getnextBirthday(2,18);
console.log("My next birthday is on:", nextBirthday.toLocaleDateString())