const conditionalPromises = new Promise<string>((resolve,reject)=>
{
    const success = Math.random() > 0.5;
    if (success){
        resolve("Sucess!");
    } else {
        reject(new Error("Failure"));
    }
});

conditionalPromises
.then((result)=> console.log(result)
)
.catch((error)=> console.log(error.message)
)