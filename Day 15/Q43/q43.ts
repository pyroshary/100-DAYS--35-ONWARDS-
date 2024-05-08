let magicians: string[] = ["Alice", "David", "Chris"];

function make_great(magicians: string[]): string[] {
    let greatMagicians : string[]= [];
    magicians.forEach(magician => greatMagicians.push(`${magician} the Great`));
    return greatMagicians;
}

let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
make_great(magicians); // Shows original names
console.log("Great magicians:");
make_great(greatMagicians); 