//consume the promises:-
//                   1-.then nd .catch
//                   2.async and await
import fs from "node:fs/promises";
// fs.readFile("promise.json")
// .then((data)=>{
//     data=String(data);
//     console.log(data);//when we call it it was in bufferformat so before call the data ,the data should be in string
// })
// .catch((err)=>{
//     console.log(err)
// })
//=================
//now i want to write in the file
//so can do like that put the fs.write in the then block
// fs.readFile("promise.json")
// .then((data)=>{
//     data=String(data);
//     console.log(data);
//     //now add write the file so
//     data=data+1
//     fs.writeFile('promise.json',String(data))
//     .then(()=>{
//         console.log("write to the file sucessfully")
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// })
// .catch((err)=>{
//     console.log(err)
// })
//================
//method 2
//==============
async function main(){
      try{
        let data = await fs.readFile("promise.json");
        data = String(data);
        console.log(data);
        console.log("read the file");
        data = data+"mgh";
        await fs.writeFile("promise.json",String(data))

      }
      catch(err){
            console.log("something went wrong");
      }
}
main()