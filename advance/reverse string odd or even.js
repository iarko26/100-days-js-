function revstring(str){
    if(str.length%2!=0){
        const word=str.split("").reverse().join("");
        return word;
    }
    else{
       return `The ${str} is not odd`;

    }
 

}
console.log(revstring("boo"));