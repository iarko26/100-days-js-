let arr=[1,33,44,98,55,29];


function filterarr(arr){
    return arr.filter((val)=>{
       

        if(val%2==0){
            return val;
          
        }
     
        

    });


    
    
}
console.log(filterarr(arr));