// Day 2: Arrays Deep Dive
// 1. Remove duplicates [1,2,2,3,4,4,5] → [1,2,3,4,5]
// 2. Find second largest [10, 5, 20, 8, 15] → 15
// 3. Merge arrays [1,2,3] + [4,5,6] → [1,2,3,4,5,6]
// 4. Count vowels in "javascript"
// 5. Check if array is sorted [1,2,3,4,5] → true

let arr = [1,2,2,3,4,4,5];
let f = arr.filter((num)=> num !== arr[num])
console.log(f);

// function remove(arr){

//     for(let i=0; i < arr.length; i++){
//         if(arr[i] !== arr[i]){
//             console.log(arr[i]);   
//         }
//     }
// }
// remove(arr)