async function apicalls(url){
  let response=await fetch(url);
  if(response.ok){
    return await response.json();
  }
  else{
    throw new Error("Error fetching data");


  }
}
apicalls("https://jsonplaceholder.typicode.com/posts").then(data=>console.log(data)).catch(err=>console.log(err));
