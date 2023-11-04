 /*
make a api call
get the data
write to sucess.json(completed:true)
write to error.json(completed:false)
*/
import axios from "axios";
import fs from "node:fs/promises"
//method-1
// axios.get("https://jsonplaceholder.typicode.com/todos")

// .then((res)=>{
//     // console.log(res.data);
//     //all the  completed is true ==> itertare over 100 element
//     let completed = res.data.filter(item=>item.completed == true)//we can write(item=>item.completed)
//     //all the completed isn false==> here once again iterate over 100 element
//     let notCompleted = res.data.filter(item=>item.completed == false)//we can write(item=>!item.completed)

//     fs.writeFile("sucess.json",JSON.stringify(completed))
//     .then(()=>{
//         console.log("write to the true files");
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
//     fs.writeFile("err.json",JSON.stringify(notCompleted))
//     .then(()=>{
//         console.log("write to the false files");
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
    

// })
// .catch((err)=>{
//     console.log(err);
// })
//method-1 in another way
axios.get("https://jsonplaceholder.typicode.com/todos")
.then((res)=>{
    //  console.log(res.data);
    let isCompleted = {
        sucess:[],
        error:[]
    }
    let output = res.data.reduce((acc, ele)=>{
        if(ele.completed) acc.sucess.push(ele);
        else acc.error.push(ele)
        return acc;
    },isCompleted)
    fs.writeFile("sucess.json",JSON.stringify(output.sucess))
    .then(()=>{
        console.log("added the complted true in sucess.json file")

    })
    .catch((error)=>{
        console.log(error)
    })
    fs.writeFile("err.json",JSON.stringify(output.error))
    .then(()=>{
        console.log("added the complted false in err.json file")

    })
    .catch((error)=>{
        console.log(error)
    })

           
})
.catch((err)=>{
    console.log(err);
})
