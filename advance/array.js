//array of objects

let grocceylist=[{
    name:'Apple',
    price:30,
    quantity:2
},
{
    name:'Banana',
    price:20,
    quantity:3
},
{
    name:'Orange',
    price:25,
    quantity:4
}
];
function gettotal(grocceylist){
    let total=0
  for(let i=0;i<grocceylist.length;i++){
      total+=grocceylist[i].price*grocceylist[i].quantity;
  }
  return total; //return as number

}
console.log(gettotal(grocceylist)); 