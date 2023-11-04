// var a=9;
// if(a % 15 == 0){
//     console.log("yes")
// }
// else {
//     if(a % 5 == 0){
//         console.log("no");
//     }
// else {
//     if(a % 3 == 0){
//         console.log("hey")
//     }
// }
// }
    
// var a=6;
// var b=10;
// var c=2
// if(a>b){
//     if(a==c){
//         console.log("pass");
//     }
//     else{
//         console.log("fail");
//     }
// }
// else{
//     console.log("not elg");
// }

// var i=1;
// while(i<=100){
//     console.log(i);
//     i++;
// }
// for(var i=2; i<20; i+=2){
//     console.log(i);
// }
// var count=0;
// var i=1;
// while(count < 10){
//     if(i%2==0){
//         console.log(i);
//         count++
//     }
//     i++;
// }
// function a(){
//     // console.log("hello");
//     return "hello";
// }
// function get(cd,name){
//     console.log(cd(),name);
// }
// get(a,"raja")

// function add(a,b){
//     return a+b;
// }

// function sum(cd,name){
//     console.log(cd(3,2)+name);
// }
// sum(add,"raja")
var i=10;
if( (function f() { return false})()){
    i += typeof f;
}
console.log(i);
// function f(){

//     console.log("hello")
//     return "hello";
//      i += typeof f
// }
// console.log(2+typeof f)