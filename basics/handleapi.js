function handleapi(data){
    console.log(data);

}
async function simulateapi(url,handleapi){

try{
    let con=await fetch(url);
    let data= await con.json();
    handleapi(data);
    
}
catch(err){
    console.log(err);
}
}
simulateapi("http://worldtimeapi.org/api/timezone/Asia/Dhaka",handleapi);