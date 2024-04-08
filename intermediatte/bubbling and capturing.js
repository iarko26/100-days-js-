let parent=document.getElementById('parent');
let child=document.getElementById('child');
parent.addEventListener('click',(e)=>{
    console.log(e.currentTarget);
},true)
child.addEventListener('click',(e)=>{
    console.log(e.currentTarget);
},true)


