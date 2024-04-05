function occurences(arr,target){
    return arr.filter((val)=>{
        // if(val==target){
        //     val.delete;
        // }
        // else{
        //     return val;
        
        // }
        return val!=target;

    })
}
let arr=[10,10,30,30,30,40,50,60,99,99];
let target=99;
console.log(occurences(arr,target));