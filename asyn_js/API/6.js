import axios from "axios";

/*
"https://api.github.com/users/{user}"
take the user name from the user
[
    {
        name:
        follower:
        following
    }
]
*/
// let users = ["himansu8","rajaramsahoo","Abdul535","happydeeme","ry"];

// function main(userName){
//     return axios.get(`https://api.github.com/users/${userName}`);
// }
// const userData=[]
// users.forEach((user)=>{
//     main(user)
//      .then((res)=>{
//         const item  =  {};
//         item.name=res.data.name;
//         item.id=res.data.id;

//         userData.push(item)
//         // console.log(item)
//         // console.log(userData)

//      })
//      .catch((err)=>{
//         console.log(err.response.data.message);
//      })
// })
// setTimeout(()=>{
//     console.log(userData)
// },2000)
//
//=====================
// promise all (promise 1, promise 2, .......)
// because pervious method was taking time so we have to add the setTimeOut fun 
const users = ["himansu8","rajaramsahoo","Abdul535","happydeeme","ry"];
function main(userName){
    return axios.get(`https://api.github.com/users/${userName}`);
}
const userData = [];
const promiseArray = users.map(user => main(user));

Promise.all(promiseArray)
.then((res)=>{
    //   console.log(res[0].data)
      res.forEach((ele)=>{
        const info = {}
        info.name=ele.data.name
        info.id=ele.data.id

        userData.push(info)
      })

      console.log(userData)

})
.catch((err)=>{
    console.log(err.response.data.message)
})