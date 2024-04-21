var conditionalPromises = new Promise(function (resolve, reject) {
    var success = Math.random() > 5;
    if (success) {
        resolve("Sucess!");
    }
    else {
        reject(new Error("Failure"));
    }
});
conditionalPromises
    .then(function (result) { return console.log(result); })
    .catch(function (error) { return console.log(error.message); });
