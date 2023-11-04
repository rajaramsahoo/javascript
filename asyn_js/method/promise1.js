/*
promises:-
1-a promise is an object respresenting the eventual completion or failue of an asynchronus opertioan
2-Promises in JavaScript are a way to handle asynchronous operations. They provide a cleaner and more structured way to work with asynchronous code compared to callbacks. Promises represent a value which might be available now, in the future, or never. They have three states:

Pending: Initial state, before the promise is resolved or rejected.

Fulfilled: The promise is resolved successfully, and it has a result.

Rejected: The promise is resolved with an error or exception.

Promises can be created using the Promise constructor, which takes a single argument,
 a callback function with two parameters: (resolve) and (reject). Inside this callback function,
 you perform your asynchronous operation. When the operation is successful,
  you call resolve with the result, and when there's an error,
   you call reject with an error object.

*/
//Because of call back hell(when you do along opertion in asyn)
// import fs from "node:fs/promises";
// fs.readFile('promise.json')//pending satate
// .then((data)=>{
//     console.log(data);

// })
//o/p=buffer format
//then put data=string(data);
//==============
import fs from "node:fs/promises";
// fs.readFile('promise.json')
// .then((data)=>{
//     data = String(data);
//     console.log(data);//resolve state

// })//==========
//o/p=the data inside the promise.json is show
/*Note-a promise is object that taken two function 
1.resolve()-is used when the  promise is sucessful
2.reject()-is used when the promise is unsucessful
*/  
//==========
// let output = fs.readFile('promise.json')
// console.log(output);
// //o/p=is in pending state
//=======
// .catch((err)=>{
//     console.log(err);//promise in reject state
// })
//=========
/*
.then ans .catch is used to consume the promises
.then=.then(): The .then() method is used to specify what should happen when a Promise is resolved 
or successfully completed. It takes one or more callback functions as arguments,
 where the first callback function is executed when the Promise is resolved,
  and it receives the resolved value as its argument. 
  Additional .then() functions can be chained to handle the value further.
  .catch=.catch(): The .catch() method is used to specify what should happen when a Promise is rejected or
   when an error occurs during the asynchronous operation. 
   It takes a single callback function as an argument,
    which is executed when the Promise is rejected, and it receives the error as its argument.
*/
//============
// method-2
async function main(){
    try{
        let data = await fs.readFile("promise.json")
        data=String(data);
        console.log(data);

    }
    catch(err){

        console.log(err);
    }

}
main()
