let product={
  name:"Hp 14s laptop",
  price:640000,
  quantity:2,
  calculate:function(){
    return this.price*this.quantity;
  }


}

let total=product.calculate();
console.log(total);

