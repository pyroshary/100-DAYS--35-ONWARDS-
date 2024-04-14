function loguntilVowel(str:string):void{
    const vowels = "aeiouAEIOU";
    for (const char of str) {
        if (vowels.includes(char)) {
            console.log(`First vowel found is ${char}`);
            break;
        }
        console.log(char);
    }
}

loguntilVowel("syzygy");