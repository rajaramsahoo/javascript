/*
add the two num and store in res by the help API 
// `https://appserver-w05c.onrender.com/add/${i}/${j}
Steps:
1. ask the user num1
1. ask the user num2
3. make api call get the response (num1 + num2) => res1
4. the sum will be in res1
5. ask the user for num3
6. make api call get the response (num3 + res1) => res2
7 the second sum will be res2
8. ask the user for num4
9. make api call get the response (num4 + res2) => res3
10. the last sum will be res3
*/
//=======================
//method-1/nested .then .catch
// import axios from "axios";
// import readlinesync from "readline-sync";
// let num1=readlinesync.questionInt("Enter the 1st number:- ")
// let num2=readlinesync.questionInt("Enter the 2nd number:- ")
// axios.get(`https://appserver-w05c.onrender.com/add/${num1}/${num2}`)
// .then((res)=>{
//         //   console.log(res)(the o/p was 15 bt carring the meta data also)
//         console.log(`addition of num1 & num2  ${res.data}`)
//         let num3=readlinesync.questionInt("Enter the 3nd number:- ")
//         axios.get(`https://appserver-w05c.onrender.com/add/${num3}/${res.data}`)
//         .then((res1)=>{
//             console.log(`addition of num3 & res  ${res1.data}`)
     
//         })
//         .catch((err)=>{
//             console.log(err)
//         })

// })

// .catch((err)=>{
//     console.log(err);
// })
//===========================
//method -1 (promise chaining .then .then .catch) 
import axios from "axios";
import readlinesync from "readline-sync";
let num1 =  readlinesync.questionInt("Enter the 1st number:-");
let num2 = readlinesync.questionInt("Enter the 2nd number:-");
axios.get(`https://appserver-w05c.onrender.com/add/${num1}/${num2}`)
.then((res)=>{
        console.log(`Addition of num1 and num2 is ${res.data}`);
        let num3 = readlinesync.questionInt("Enter the 3rd number :-");
        return axios.get(`https://appserver-w05c.onrender.com/add/${num3}/${res.data}`)
})
.then((res1)=>{
           console.log(`Addition of num3 and res is ${res1.data}`);
  })


.catch((err)=>{
    console.log(err);
})




