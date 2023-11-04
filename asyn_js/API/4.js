//a public API git up
//"user_url": "https://api.github.com/users/{user}"
//himansu8,rajaramsahoo,Abdul535,happydeeme,ry
import axios from "axios";
import fs from "fs/promises";
axios.get("https://api.github.com/users/ry")
.then((res)=>{
    // console.log(res.data)
    console.log(`The login name of ry: ${res.data.login}`)//get the log in
    console.log(`The ID of ry: ${res.data.id}`)//get the id
    console.log(`The follower of ry: ${res.data.followers}`);
    console.log(`The following of ry: ${res.data.following}`)
    //write the data in 4.json file
    fs.writeFile('4.json',JSON.stringify(res.data))
    .then(()=>{
        console.log("write to file")
    })
    .catch((err)=>{
        console.log(err)
    })

})
.catch((err)=>{
    console.log(err);
})
