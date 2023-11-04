import fs from "node:fs";

function readFromFile(){
    let data = [1,2,3,4]
    // let data = hello; 
    fs.readFile('sample.txt',(err,data)=>{
      if(err) throw err;
    //   console.log(data);
    //when i do console.log(data) i got the output was in buffer format,
    //bcz when u want to read a file 1st convert the data to string

      data =  JSON.parse(data);
    //   data = String(data);
      console.log(data);

    })
};
readFromFile()