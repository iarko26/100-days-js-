////create a function that take s a string as an argument the function must return a string containing 1s and 0s based on the string argument words.if any word in the argument is not equal to "zero" or "one" you should ignore it.The returned strign's length should bea multiple of 8 ,if the string is not a multiple of 8 you should remove the numbers in excess.
function textnumber(str){
    let binary = str.split(" ").filter(
        word => word.toLowerCase() === "zero" || word.toLowerCase() === "one"
    );

    let binarystring = binary.map((word)=>{
        return word.toLowerCase() === "one" ? "1" : "0";
    }).join("");

  
    const remainder = binarystring.length % 8;
    if (remainder !== 0) {
        binarystring = binarystring + "0".repeat(8 - remainder);
    }

    return binarystring;
}

console.log(textnumber("zero zero two one zero zero one one zero zero zero one"));


