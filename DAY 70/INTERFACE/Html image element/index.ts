let imgElement : HTMLImageElement= document.createElement("img")
imgElement.src= "image.jpg";
imgElement.alt ="My image";

if(imgElement.complete){
    console.log(`image dimension:${imgElement.naturalWidth}x${imgElement.naturalHeight}`);
    }else{
        imgElement.addEventListener("load",() =>{
            console.log(`image dimension: ${imgElement.naturalHeight}x$${imgElement.naturalWidth}`);
            
        });
    
}