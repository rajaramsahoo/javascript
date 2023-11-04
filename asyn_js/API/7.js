//adding two number concurently
// for(var i=1;i<=5;i++){
//     // console.log(i)
// }
// // adding two number using for loop 
// for(let i=0,j=1; i<=5,j<=5; i++,j++){
//     // console.log(i,j);
//     // console.log(i+j);
//     console.log(`The multiplication of ${i} and ${j} is ${i*j}`)
// }
//========================
//adding two number by using API axios
// "https://appserver-w05c.onrender.com/add/121/200";

// import axios from "axios";

// axios.get("https://appserver-w05c.onrender.com/add/121/200")
// .then((res)=>{
//     console.log(res.data)

// })
// .catch((err)=>{
//     console.log(err);
// })
// //o/p=321
//=====================================
//adding the two value by using loop
"https://appserver-w05c.onrender.com/add/121/200";

import axios from "axios";

for(let i=0,j=1; i<=5,j<=5; i++,j++){
    // console.log(i,j);
    // console.log(i+j);
    axios.get(`https://appserver-w05c.onrender.com/add/${i}/${j}`)

    .then((res)=>{
          console.log(res.data)
    })
    .catch((err)=>{
        console.log(err);
    })
    
}
/*o/p=get the output
1
7
9
3
5
//bt not the data in proper order
*/


