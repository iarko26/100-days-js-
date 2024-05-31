let textinput=document.getElementById('intext');
let btnsave=document.querySelector('.btn-save');
let btnclear=document.querySelector('.btn-clear');

let textread=document.getElementsByClassName('showtext');
function btnsaveclick(){
    sessionStorage.setItem('key1',textinput.value);
    
if(sessionStorage.getItem('key1')){
    textread[0].innerHTML = sessionStorage.getItem('key1');



}


}
function clearclick(){
    sessionStorage.removeItem('key1');
    textread[0].innerHTML = '';
    textinput.value = '';

}


btnsave.addEventListener('click',btnsaveclick);
btnclear.addEventListener('click',clearclick);