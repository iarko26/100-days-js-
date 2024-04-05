let con=document.getElementById('con');
let button=document.createElement("button");
let display=document.createElement("p");
display.textContent="Random number will be displayed here";
button.textContent="Click me to generate random number";
function getrandom(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
button.addEventListener("click",()=>{
let random=getrandom(1,100);
console.log(random);
display.textContent=random;


});
con.appendChild(button);

con.appendChild(display);
