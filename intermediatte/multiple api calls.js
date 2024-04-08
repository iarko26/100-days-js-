async function apicalls(url,callback){
try{
  let response=await fetch(url);
  let data=await response.json();
  callback(data);
}
catch(err){
  console.log(err);
}



}
function handle(data){
  console.log("Process",data);
}
apicalls('https://jsonplaceholder.typicode.com/posts/1',handle);
apicalls('https://jsonplaceholder.typicode.com/posts/2',handle);

// function apicalls(url,callback){
//   fetch(url)
//   .then(response=>response.json())  
//   .then(data=>callback(data))
//   .catch(err=>console.log(err));
// }
// function handle(data){
//   console.log("Process",data);
// }

// apicalls('https://jsonplaceholder.typicode.com/posts/1',handle);
// apicalls('https://jsonplaceholder.typicode.com/posts/2',handle);




