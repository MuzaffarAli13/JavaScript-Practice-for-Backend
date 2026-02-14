// var ourArray = ["one",1];
// console.log(ourArray);

// Nested Array
// var ourArray = [["Bulls",1],["white Sox",23,true]]
// console.log(ourArray);


// Acces Array Data With Index
// var myArray = [50,60,70];
// var myData = myArray[0];
// console.log(myData);


// Modify Array Data
// var myArray = [10,20,30];
// myArray[1] = 45;
// console.log(myArray);

// Access Multi-Dimensional Arrays
// var myArray = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],1234,45]];
// var myData = myArray[3][0][0];
// console.log(myData);


// Push();
//  var myArray = [["Apple","Mango"],["Banana",30]];
//  myArray.push(["Dog","Cat"]);
//  console.log(myArray);
 
 
// pop()
// var myArray = [["cat",30],[30,"Apples"]];
// var removedfromArray = myArray.pop();
// console.log(myArray);


//  Shift();
// var myArray = ["Muzaffar","Ali","Aftab"];
// var shiftingArray = myArray.shift();
// console.log(myArray);


// Unshift()
// var myArray = [["Ali",25],["Khan",36]];
// myArray.shift() // removed firt Element
// myArray.unshift(["Muzaffar",18]);
// console.log(myArray); 
// [ [ 'Muzaffar', 18 ], [ 'Khan', 36 ] ]



// Shoping list with arrays
// var mylist = [["Apples",30],["Eggs",10],["Milk",2],["Bananas",12]];
// console.log(mylist);


// Nested Array
// var myPlants = [
//     {
//         type:"flower",
//         list:[
//             "sun",
//             "moon",
//         ]
//     },
//     {
//         type:"tree",
//         list:[
//             "sun",
//             "moon",
//         ]
//     },
// ];
// console.log(myPlants[0].list[0]);

// Record Collection
// var collection = {
//     "2548":{
//         "album":"Sliperry",
//         "artist":"Bon Jovi",
//         "tracks":["Let it roc","You give love"],
//          },
//     "2448":{
//         "album":"1998",
//         "artist":"prince",
//         "tracks":["Let it rock","You give love don't "],
//          },
//     "1245":{
//         "artist":"Robot",
//         "tracks":[],
//          },
//     "5439":{
//       "album":"ABBA Gold"
//         }
// }

// var collectionCopy = JSON.parse(JSON.stringify(collection));
// function updateColloection(id,prop,value){
//    if(value === ""){
//     delete collection[id][prop];
//    }else if(prop === "tracks"){
//     collection[id][prop] = collection[id][prop] || [];
//     collection[id][prop].push(value);
//    }else{
//     collection[id][prop] = value;
//    }
//     return collection;
// };

// console.log(updateColloection(1245,"tracks",""));



// map
// Yaad rakho: map() naya array return karta hai, original array change nahi hota!
// const numbers = [1, 2, 3, 4, 5]
// let double = numbers.map((num)=>num*2);
// console.log(double);

// let students = ["ali","khan","ahmed"];
// let upperCase = students.map((student)=>student.toUpperCase());
// console.log(upperCase);


// filter() — condition ke hisaab se elements chuno
// let numbers = [10,20,30,40,50,60];
// let bigNumber = numbers.filter((number)=> number > 30);
// console.log(bigNumber);


// const students = [
//     { name: "Ali",   marks: 80 },
//     { name: "Sara",  marks: 35 },
//     { name: "Ahmed", marks: 65 },
//     { name: "Bilal", marks: 28 }
// ];

// let passingStudents = students.filter((std)=>std.marks >= 40)
// console.log(passingStudents);



// find()
// const students = [
//     { name: "Ali",   marks: 80 },
//     { name: "Sara",  marks: 35 },
//     { name: "Ahmed", marks: 65 },
// ];

// let std = students.find((student)=>student.name === "Ali");
// console.log(std);


// reduce() — sab values ko ek value mein convert karo
// const numbers = [10, 20, 30, 40];

// // Sab ka total nikalo
// const total = numbers.reduce((sum, num) => sum + num, 0);
// console.log(total); // 100

// // 0 matlab — sum ki starting value 0 hai


// 2. ES6+ Features
