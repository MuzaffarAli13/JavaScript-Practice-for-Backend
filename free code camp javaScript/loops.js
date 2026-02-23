// var myArray = [];
// var i = 0;
// while(i < 5){
//    myArray.push(i);
//    i++;
// };
// console.log(myArray);



// Iterate with for loops
// var myArray = [];
// for(let i = 0; i < 5; i++){
//     myArray.push(i);
// };
// console.log(myArray);


// Iterate Odd number with a for loops
// var myArray = [];
// for(let i = 1; i < 10 ; i += 2){
//     myArray.push(i)
// }
// console.log(myArray);



// Count Backwords with loops
// var myArray = [];
// for (let i = 9; i > 0; i -= 2){
//    myArray.push(i)  
// };
// console.log(myArray);



// Iterate throug an Array with a For Loops
// var myArray = [1,2,3,4,5];
// var total = 0;

// for(let i = 0; i < myArray.length; i++) {
//     total += myArray[i]
// }
// console.log(total);



// Nested For loops
// function multiplayAll(arr){
//     let products = 1;
    
//     for(let i=0; i < arr.length; i++){
//       for(let j=0; j < arr[i].length; j++){
//        products *= arr[i][j];  
//       }
        
//     }
    
//     return products
// }

// let product = multiplayAll([[1,2],[3,4],[5,6]]);
// console.log(product)



// Iterate With Do While Loop
// var myArray = []
// var i = 10
// do {
//     myArray.push(i);
//     i++
// }while (i < 5);
// console.log(myArray);


// Profile Lookup
// var profiles = [
//   {
//     "firstName": "Ahmed",
//     "lastName": "Khan",
//     "number": "03011223344",
//     "likes": ["Biryani", "Karahi"]
//   },
//   {
//     "firstName": "Sara",
//     "lastName": "Malik",
//     "number": "03144556677",
//     "likes": ["Pasta", "Pizza"]
//   },
//   {
//     "firstName": "Usman",
//     "lastName": "Raza",
//     "number": "03219876543",
//     "likes": ["Zinger", "Fries"]
//   },
//   {
//     "firstName": "Ayesha",
//     "lastName": "Hussain",
//     "number": "03455667788",
//     "likes": ["Sandwich", "Noodles"]
//   }
// ];

// function lookupProfie(name,prop){
//     for(let i=0; i < profiles.length; i++){
//         if(profiles[i].firstName === name){
//             return profiles[i][prop] || "Not Such a property"
//         }
//     }
//     return "Not Such a Contact"
// };

// var data = lookupProfie("Sara","likes");
// console.log(data);



// Genrate Random fractions
// function randomFractions(){
//     return Math.random();
// };
// console.log(randomFractions());



// Genrate Random Whole Numbers
// function randomWholeNum(){
//     return Math.floor(Math.random() * 20);
// };
// console.log(randomWholeNum());



// Genrate Random Whole Numbers within a Rang
// function randomNum(myMin,myMax){

//     return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
// };
// console.log(randomNum(5,15));


// Use The PerseInt Function
// function convetIntoNumber(str){
//    return parseInt(str); 

// };
// console.log(convetIntoNumber("10"));


// UseThe ParseInt function with the Radix (Binary read)
// function convetIntoInteger(str){
//     return parseInt(str,2);
// };
// console.log(convetIntoInteger("10112"));



// Use The Conditional Ternary Numbers
// function checkEqual(a,b){
    //     return a === b ? true : false
    // };
    // console.log(checkEqual(20,20));
    
    
// Use Multiple Conditional Ternary Numbers
// function checkSign(num){
//     return num > 0 ? "Positvie" : num < 0 ? "Negative" : "Zero";
// }
// console.log(checkSign(10));



