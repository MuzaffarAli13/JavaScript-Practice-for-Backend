// Problem 1:
// Array ka sum nikalo
const arr = [10, 20, 30, 40, 50];
// Method 1
const sum = (arr)=>{
   let total = 0;
   for(let i=0; i < arr.length; i++){
    total += arr[i]
   }
   return total
}
console.log(sum(arr));

// Method 2
let sum2 = arr.reduce((sum,num)=>sum+ num,0)
console.log(sum);




// QNo
// Problem 2:
// Largest number nikalo
const numbers = [5, 12, 8, 20, 3];
function largest(arr){
    let num = arr[0];
    for(let i=0; i < arr.length; i++){
        if(arr[i] > num){
            num = arr[i]
        }
    }
    return num
}

console.log(largest(numbers));



// Problem 3:
// String reverse karo
const str = "muzaffar";
let reversed = str.split("").reverse().join();
console.log(reversed);


