let boom=document.querySelector('.boom');
function sevenboom(arr){

    setTimeout(()=>{
        for( let i of arr){
            if(i.toString().includes('7')){
                boom.innerHTML='Boom';
            }
            else{
                boom.innerHTML="There is no Boom in the array";
            }
        }



    },2000)



}
sevenboom([1,2,3,4,5,6]);