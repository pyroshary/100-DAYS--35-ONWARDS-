function fetchData(callback) {
    var error = new Error("Failed to fetch data");
    var data = "Some data";
    if (Math.random()) {
        callback(null, data);
    }
    else {
        callback(error);
    }
}
fetchData(function (error, data) {
    if (error) {
        console.log(error.message);
    }
    else {
        console.log(data);
    }
});
