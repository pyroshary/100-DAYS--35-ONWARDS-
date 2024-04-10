function stringsEqual (str1: string, str2:string):boolean{
    return str1.toLocaleLowerCase() === str2.toLocaleLowerCase()
}

console.log(stringsEqual("HELLO GUYS","hello guys"))

console.log(stringsEqual("WORLD","word"))