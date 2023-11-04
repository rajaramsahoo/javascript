/*
there are 3 method in asynchronous java script
1-call back
2-promises
3-asyn/await
*/
//call back method:-
// 1-Here we run a cli program by taking the data from the user
//2-creat the functions in cb1.js then run(call the function) in cb2.js(by using swich cases) also creat the cb.json file(for read and write the file system)
//   Here we keep the empty sq bracket in cb.json file

import fs from 'node:fs';
// import readlinesync from 'readline-sync';
function addUser(user){
    
        //raed the file ,get the data from the user,thn push to the aarray thn write the file
    fs.readFile('cb.json',(err,data)=>{
        if(err) throw err;
        data = JSON.parse(data);
    //    let userName = readlinesync.question("Enter the full name: ");
    //    let userEmail = readlinesync.questionEMail("Enter the Email ID: ");
    //    let userAge = readlinesync.questionInt("Enter the age of ther user: ");
    //    let user ={
    //     fName:userName,
    //     email: userEmail,
    //     age: userAge
    //    }
    //here we send the comment data to cb2.js file creating a cli menu
    // in this case i want no duplicate email taken
    //so that
    const isEmailFound = data.find(ele=> ele.email == user.email);
    if(isEmailFound){
         console.log("User already taken that Email ID");
         return;
    }
       data.push(user);
    //    console.log(data);
    fs.writeFile('cb.json',JSON.stringify(data),(err)=>{
        if(err) throw err;
        console.log("User Enter The Data")
    })
 })
 }


function displayUser(userEmail){
    /*
    read the file,
    check weather the email exists
    if exits print that object of the email
    if not print "no email found"
    */
     fs.readFile('cb.json',(err,data)=>{
        if (err) throw err;
        data=JSON.parse(data);
        // console.log(data);
        // check the email exit or not
        const isEmailFound = data.find(ele=> ele.email == userEmail);
        if(!isEmailFound){
            console.log("no such email");
            return;

        }
        else {
            // console.log(isEmailFound);
            // u can also write
            console.log(`FullName = ${isEmailFound.fName}`);
            console.log(`Email = ${isEmailFound.email}`);
            console.log(`FullName = ${isEmailFound.age}`)


        }
        
     })
   

}
function updateUser(userEmail,newage){
    // read file
    // check weather the email exist
    //if exist update the record(update the new age)
    // if the user doesnot exit "no email found"
    fs.readFile('cb.json',(err,data)=>{
        if (err) throw err;
        data = JSON.parse(data);
        const userIndex=data.findIndex(ele=>ele.email==userEmail);
        if(userIndex== -1){
            console.log("user not found");
            return;
        }
        //when we got the index then we change the age by using .age;
        data[userIndex].age=newage
        fs.writeFile("cb.json",JSON.stringify(data),err=>{
            if (err) throw err;
            console.log("user age was updated sucessfully");
        })
      })


}
function deleteUser(userEmail){
    //read the file
    //check weather that email exit or not
    //if exit delete the user
    //thn rewrite the file
      fs.readFile('cb.json',(err,data)=>{
        if (err) throw err;
        data = JSON.parse(data);
        // const isEmailFound=data.find(ele=>ele.email==userEmail);
        // if(!isEmailFound){
        //     console.log("No email found")
        // }
        // else {
        //     //find the index thn splice
        //     const userIndex= data.findIndex(ele=>ele.email==userEmail)
        //     data.splice(userIndex,1)
        // }
        // //rewrite to the file after deletion
        // we can write that 98-107 line
        const userIndex=data.findIndex(ele=>ele.email==userEmail);
        if(userIndex== -1){
            console.log("user not found");
            return;
        }

        fs.writeFile("cb.json",JSON.stringify(data),err=>{
            if (err) throw err;
            console.log("users after the delate the user");
        })
      })

}
export {addUser, displayUser, updateUser, deleteUser}