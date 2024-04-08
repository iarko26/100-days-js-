//usign clousre to do counter
function counter(){
  let counter=0;
return function (){
 return counter++;
}
  
}
let createcounter=counter();
console.log(createcounter());
console.log(createcounter());
console.log(createcounter());