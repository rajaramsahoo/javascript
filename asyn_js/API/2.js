import axios from "axios";
import fs from "node:fs/promises";
//https://jsonplaceholder.typicode.com/todos
// write the data in a file
//=========================================
//method-1
// axios.get("https://jsonplaceholder.typicode.com/todos")

// .then((res)=>{
//     // console.log(res.data);
//     fs.writeFile("data.json",JSON.stringify(res.data))
//     .then(()=>{
//         console.log("write to the file");
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
    

// })
// .catch((err)=>{
//     console.log(err);
// })
//===============================================
//method-2
async function main(){
    try{
       let res =  await axios.get("https://jsonplaceholder.typicode.com/todos")
       console.log(res.data);
    //    0/p=i get the out put but i have to store it in a data.txt file so
        //  let data = res.data
         fs.writeFile("data.json",JSON.stringify(res.data));
         console.log("write to file ")
    }
    catch(error){
        console.log(error)
    }

}
main()