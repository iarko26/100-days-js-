let textinput=document.getElementById('intext');
let btnsave=document.querySelector('.btn-save');

let textread=document.getElementsByClassName('showtext');
function btnsaveclick(){
    localStorage.setItem('key1',textinput.value);
    

}
if(localStorage.getItem('key1')){
    alert(localStorage.getItem('key1'));
}


btnsave.addEventListener('click',btnsaveclick);
