let magicians: string[] = ["Ali", "rehman", "kamran"];
function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " is good magician";
    }
}

make_great(magicians);
show_magicians (magicians);


