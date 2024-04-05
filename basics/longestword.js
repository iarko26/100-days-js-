// question: Longest word in a string(write a function find longest words that takes string as input and returns the longest word in the string.if there are multiple longest words,return the first encountered)
//constraints: input string may contain alphabetics char,digits,spaces and punctuation
//input string is non-empty
//input string may contain multiple words separated by one or more spaces

//note : if the input string is empty or contains only whitespaces the function shoould return false
//the function should ignore leading and trailing whitespaces when determinig the longest word

//solution 1

function findLongestWord(str){
    if(str.trim().length===0){
        return false;
}
const words=str.split(" ");
var longestWord="";
if(checkvalidity(str)){
    for(let i of words){
        if(i.length>longestWord.length){
            longestWord=i;
        }

    }
    return longestWord;
}




    

}
function checkvalidity(str){
    if(str.length===0){
        return false;
    }
    const regx=/^[a-zA-Z0-9 .,!?]*$/;
    if(!regx.test(str)){
        return false;
    }
    const words=str.split(" ");
    if(words.length<=1){
        return false;
    }
    return true;

}
let result=findLongestWord("javascript is a programming language");
console.log(result);

//solution 2
function findlonword(st){
    if(st.trim().length===0){
        return false;
    }
    
}