// Module : A piece of code that is  used  acrross all the nodejs application.
function greet(a,b){
    console.log("hello Muzaffar Ali", a+b);
};

function sub(a,b){
    let res = a > b ? a - b : b - a
    return res
}

// module.exports = greet
// module.exports  --> return {}  aik object retrun krta h or kahin bi use krna ho to .greet kr k use kr skty hain
module.exports = {greet,sub} // key 