/*
 Function Statement: It is also known as Function Declaration.
 function a(){
    console.log("Hello")
}
a()


Function Expression: When Function Declared as value of a variable.
var b = function (){
    console.log("world")
}
b()


Anonym0us Fuction: Function Without name and do not have own identity.
function (){

}



Named Function Expression: When we gave name and assign some value to the function known Named Function Expression
var b = function c(){
    console.log("world")
}
b()



Difference b/w parameters and arguements
->  parameters: named variable passed into a function.
->  arguments:  real values passed to the function.
    var b = function c(param1,param2){
    console.log("world")
}
b(1,2)




First Class Function: Function that called in  another function. Having ability to pass function as value.
-> Also known as First Class Citizen

var b = function c(param1){
    console.log(param1)
}
b(function (){

})


*/