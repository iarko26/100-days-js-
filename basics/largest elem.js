function largestelem(arr){
    return arr.reduce((curr,max)=>{
        if(curr>max){
            return curr;
     
        }
        else{
            return max;
        }

    })
    
}
let arr=[1,2,3,4,5,6,7,8,9,10];
console.log(largestelem(arr));