/*
"https://api.github.com/users/{user}"
get the user name from the user;
ry,
*/
import axios from "axios";
import readlinesync from "readline-sync";
import fs from "fs/promises";
let user = readlinesync.question("Enter the user name:-")
axios.get(`https://api.github.com/users/${user}`)
.then((res)=>{
    console.log(res.data.id);
})
.catch((err)=>{
    // console.log(err);
    //when a use a wrong user then i got data with meta data
    console.log(err.response.data.message);
})
//go through class no 02/11/2023