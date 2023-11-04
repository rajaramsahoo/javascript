//axios : it was a promise based HTTP client
//https://jsonplaceholder.typicode.com/users
//the link was a public API
/*
        API(application program Interface)
         request(client make a request to server through API)
        ===========> 
  client             server
        <===========
        response(server send the data to client throght API)

 http= stand protocal that always browser can uder stand.
 API-api provide a way between server and client (or difference software)
     in order to retrive data and send data or perform the specific action
*/
import axios from "axios";

// let output = axios.get("https://jsonplaceholder.typicode.com/users")
// console.log(output)
// 0/p=Promise { <pending> }
//consume the data
// .then((response)=>{
//     console.log(response)
// })
// .catch((error)=>{
//     console.log(error);
// })
// o/p=i got the data of ID 1-10 bt i got the meta data also so ican do response.data bcz the data was a obj so i use (.data)
// .then((response)=>{
//     console.log(response.data)
// })
// .catch((error)=>{
//     console.log(error);
// })
//o/p=i got the data of ID 1-10
//method-2
async function main(){
    try{
        let response = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(response.data)

    }
    catch(err){
        console.log(err)
    }

}
main()
//o/p=i got the data of ID 1-10

.catch((err)=>{
    console.log(err)
})