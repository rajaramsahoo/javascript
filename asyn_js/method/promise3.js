import fs from "node:fs/promises";
//1st creat a callpromise function;
 function callpromise(age){
        let promise = new Promise((resolve,rejects)=>{
            if(age>=18) resolve ('Allowed');
            else rejects("Not Allowed")
        })
        return promise;
    }
    /*
    there are two types to consume the promise
    1=>.then & .catch method
    2=> by using async and await method
        in the method 1st creat a function:=
           async fun and await to call the callpromise(any fun)
    */
   async function getResult(){
        let output =  await callpromise(20)
        console.log(output);
   }
   getResult()
//    o/p=Allowed
// u can use a setTimeOut fun
// go back to promise1.js  nd 2.js for method 2
//============
// in async/ await here no error handling thing that was try catch block
/*
   async function getResult(){
       try{
         let output =  await callpromise(20);
        console.log(output);
       }
       catch(err){
        console.log(err);
       }
   }
   getResult()

*/