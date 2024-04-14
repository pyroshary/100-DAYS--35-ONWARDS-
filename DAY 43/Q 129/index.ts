const traditionalVSarrow ={
    value: "traditionalVSarrow value",
    traditonalFunction : function(){
        console.log("Traditonl Function:", this.value);
    },

   arrowFunction :() => { console.log("Arrow functon:", this.value)
        
    },
}

traditionalVSarrow.traditonalFunction();
traditionalVSarrow.arrowFunction();