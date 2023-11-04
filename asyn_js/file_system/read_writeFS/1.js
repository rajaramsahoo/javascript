/*
1st intiallize a project (npm init then u got the package,json file),
then change the module :"type":"module"
import fs from "node:fs"
*/
import fs from "node:fs";


function writeToAFile() {
    let data = "hello world";
    fs.writeFile('sample.txt', data,(err) => {
        if(err) console.log("something went wrong");
        console.log("Data has been stored sucessfully");
    })
}
writeToAFile();
/*
Here we write the data in a file,
sample.txt=was already there in that file we should have to write,
if we write sample.json then we have to put the in a string,
fs.writeFile is a METHOD where we have to pass three arrgument,
      ("sample.txt",data,err);
      sample.txt was the file name where have to write ,store,modify the data;
      data was the data what u want to store

*/
function writeToAFile() {
    let data = "hello world";
    fs.writeFile('sample.txt', data,(err) => {
        if(err) throw err;
        console.log("Data has been stored sucessfully");
    })
}
writeToAFile();
/*
we can write throw err in the place of console.log("something went wrong"),
throw was a error handling syntax in java script
*/