// function statemant
function greet(){
    console.log("Hello");
    
};
greet();

// function are first class
function loggreeting(fn){
    fn()
};
loggreeting(greet)


// function expression
let fn = function(){
    console.log("function expression 1");
}
fn()

// use the functin expression on the fly
loggreeting(function(){
    console.log("function expression 2");
});