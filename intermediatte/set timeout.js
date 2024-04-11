// qoute changing feature using set timeout
let qoutes=['Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it – Rajanand',
'A good programmer is someone who always looks both ways before crossing a one-way street – Doug Linder',
'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live – Rick Osborne',
'Any fool can write code that a computer can understand. Good programmers write code that humans can understand – Martin Fowler',
'Computers are good at following instructions, but not at reading your mind – Donald Knuth',
'First, solve the problem. Then, write the code – John Johnson',];
var text=document.querySelector('.qoutes');
function displayqoutes(){
    qoutes.forEach((qoutes,i)=>{
        setTimeout(()=>{
        text.textContent=qoutes;


        },i*3000);

    });
}
displayqoutes();


