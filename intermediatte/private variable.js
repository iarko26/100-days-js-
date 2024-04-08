function counter(){
  let count=0;
  function increament(){
    count++;
    console.log(count);
  }
return{
  increamentcounter:function(){
    increament();
  },
  getcounter:function(){
    return count;
  }
  
}
  
}
let Counter=counter();
console.log(Counter.increamentcounter());
