let con=document.getElementById('con');
let button=document.createElement("button");
button.textContent="Click me";
button.addEventListener("click",()=>{
    alert("Button clicked");
});
con.appendChild(button);