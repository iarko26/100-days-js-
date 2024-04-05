let arr=[1,2,3,4,5];
function doublelem(arr){
    return arr.map((val)=>{
        return val*2;
    });
}
console.log(doublelem(arr));