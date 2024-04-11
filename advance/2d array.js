//***create a js function that generates a 2d array with the specified number of rows andd columns.each element in the array should contains the sum of its row index and column index.once you have created the array write two additional functions to display array in its original form and in reverse */
//show the output of the array in the webpage
let oa=document.querySelector('.or-array');
let ra=document.querySelector('.rev-array');

function multiarray(row,column){
    let arr=[]

    for(let i=0;i<row;i++){
        arr[i]=[];
        for(let j=0;j<column;j++){
    
            arr[i][j]=i+j;
    
        }

    
    }
    return arr;
}
function displayArray(arr) {
    oa.innerHTML = '[';
    for(let i = 0; i < arr.length; i++) {
        oa.innerHTML += '[' + arr[i].join(', ') + ']' + (i < arr.length - 1 ? ',<br>' : '');
        console.log(arr[i]);
    }
    oa.innerHTML += ']';
}

function reversearray(arr) {
    ra.innerHTML = '[';
    for(let i = arr.length - 1; i >= 0; i--) {
        ra.innerHTML += '[' + arr[i].reverse().join(', ') + ']' + (i > 0 ? ',<br>' : '');
        console.log(arr[i]);
    }
    ra.innerHTML += ']';
}
let row=3;
let column=3;
let arr=multiarray(row,column);
console.log("Original Array:")
displayArray(arr);
console.log("Reverse Array:")
reversearray(arr);





