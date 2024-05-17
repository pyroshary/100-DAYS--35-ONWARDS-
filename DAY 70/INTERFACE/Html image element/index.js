var imgElement = document.createElement("img");
imgElement.src = "image.jpg";
imgElement.alt = "My image";
if (imgElement.complete) {
    console.log("image dimension:".concat(imgElement.naturalWidth, "x").concat(imgElement.naturalHeight));
}
else {
    imgElement.addEventListener("load", function () {
        console.log("image dimension: ".concat(imgElement.naturalHeight, "x$").concat(imgElement.naturalWidth));
    });
}
