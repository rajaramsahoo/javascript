import fs from "node:fs/promises";
function callpromise(age){
    let promise = new Promise((resolve,rejects)=>{
        if(age>=18) resolve ('Allowed');
        else rejects("Not Allowed")
    })
    return promise;
}
// // let output=callpromise(20);
// // console.log(output)
// // o/p=promise {'Allowed'};
// //====
// // for consume the promises;
//method-1
// callpromise(20)//don't use ; after call a function
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err);
// })
// //o/p=allowed
//method-2
callpromise(20)
async function main(){
    try{
       let data = await callpromise(20);
       console.log(data);
       console.log("read sucessfully")
    }
    catch(err){
        console.log(err)
    }

}
main()

//============================
// when u use a setTimeOut fun in promieses;

// function callpromise(age){
//     return new Promise((resolve,rejects)=>{
//         setTimeout(()=>{
//             if(age>=18) resolve("You are allowed");
//             else rejects("nikal")
//         },4000)
//     })
// }
// // let output=callpromise(20);
// //  console.log(output)
// //  o/p=Promise { <pending> }
// //     bcz we use settimeout fun so that the promoises in pending state.
// // Now comuse the promise
// callpromise(200)
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })
//0/p=You are allowed(it aws printing 4sec.)
//when u pass 200 in callpromise it was in resolve state so go to .then block
// when u pass 10 in callpromises it was in reject state so go to . catch block
//============
// method 2 for consume promises
// function callpromise(age){
//     return new Promise((resolve,rejects)=>{
//         setTimeout(()=>{
//             if(age>=18) resolve("You are allowed");
//             else rejects("nikal")
//         },4000)
//     })
// }
// async function getResult(){
//     let output = await callpromise(20);
//     console.log(output);
// }
// getResult()
// //o/p=after 4 sec it print ur allowed
