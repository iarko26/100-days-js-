// //one way

// //  function loadimage(url){
// // return new Promise((resolve,reject)=>{
// //   var image=new Image();
// //   image.width=200;
// //   image.height=200;

// //   image.addEventListener('load',()=>{
// //     resolve(image);
// //   });
// //   image.addEventListener('error',()=>{
// //     reject(new Error('Error loading image'));
// //   });
// //   image.src=url;

// // })

// // }
// // var imagecont=document.getElementById("image-container");
// // var imageurls=[
// //   'https://media.wired.com/photos/5b8999943667562d3024c321/master/w_1920,c_limit/trash2-01.jpg',
// //   'https://assets-global.website-files.com/64949e4863d96e26a1da8386/64f5f56c78d05cf501922f99_64a2ef9774661044d9755e98_URL%2520-%2520Glossary.png'
// // ];
// // Promise.all(imageurls.map(loadimage)).then((img)=>{
// //   img.forEach((image)=>{
// //     imagecont.appendChild(image);
// //   });
// // }).catch((error)=>{
// //   console.log(error);
// }

//another way 
         function loadimage(url){
         return new Promise((resolve,reject)=>{
           var image=new Image();
           image.width=200;
           image.height=200;

           image.addEventListener('load',()=>{
             resolve(image);
           });
           image.addEventListener('error',()=>{
             reject(new Error('Error loading image'));
           });
           image.src=url;

         })

         }
         var imagecont=document.getElementById("image-container");
         var imageurls=[
           'https://media.wired.com/photos/5b8999943667562d3024c321/master/w_1920,c_limit/trash2-01.jpg',
           'https://assets-global.website-files.com/64949e4863d96e26a1da8386/64f5f56c78d05cf501922f99_64a2ef9774661044d9755e98_URL%2520-%2520Glossary.png'
         ];
         async function displayimages(){
           try{
             var img=await Promise.all(imageurls.map(loadimage));
             img.forEach((image)=>{
               imagecont.appendChild(image);
             });

           }
           catch(e){
             console.log(e);
           }
         }
         displayimages();
         
              