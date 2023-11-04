import fs from "fs";
//creat callback function:=
//========
// fs.readFile("data.txt",(err,data)=>{
//     if(err) throw (err);
//     else{
//         data = String(data);
//         console.log(data)
//     }
// })
// it was in buffer format so that i add (data=String(data))
//========
//callback => promises
function readFile(fileName){
    return new Promise((resolve,reject)=>{
        fs.readFile(fileName,(err,data)=>{
            if(err) reject(err);
            resolve(data)
        })
    })
}
readFile('data.txt')
// here I donot get the output because u have consume the promise

//==========
//consume method-1
// .then((data)=>{
//     console.log(String(data));
// })
// .catch((err)=>{
//     console.log(err)

// })
//o/p=op was 123 bcz the data inside the data.txt file was 123
//consume method-2
async function main(fileName){
    try{
        let output = await readFile(fileName);
        console.log(String(output));
    }
    catch(err){
        console.log(err);
    }
}
main('data.txt')
//o/p=123
