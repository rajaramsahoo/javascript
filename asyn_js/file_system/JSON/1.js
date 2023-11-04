/*
JSON-javascript object notation
file.json---it take the very easy to readabe
        ----{only use curly bracket}
          ---"the values in double semicolon"
          ---take string,array,number,bullian,null
Why use json :- it helps in faster data interchange and web service results.
               It is text-based, lightweight,
               and has an easy-to-parse data format requiring no additional code for parsing.
There are two types of json 1=convert obj to string,2=string to object

*/
//1=JSON.stringify(convert obj to string)

let bioData = {
     "fname" : "Rajaram Sahoo",
     "email" : "rajaramsahoo1998@gmail.com",
     "age" : "25",
     "isStudent": true,
    "hobbies": ["Reading", "Gardening", "Hiking"]

}
console.log(bioData);
/*output-{
  fname: 'Rajaram Sahoo',
  email: 'rajaramsahoo1998@gmail.com',
  age: '25',
  isStudent: true,
  hobbies: [ 'Reading', 'Gardening', 'Hiking' ]
}
Here the out put was a object
*/
let jsonString = JSON.stringify(bioData);
console.log(jsonString)
//i got the same same output bt the output was in string.
let parsedperson = JSON.parse(jsonString);
console.log(parsedperson);
//here we convert the string to the javascript obj