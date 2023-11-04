
import readlinesync from 'readline-sync';

import {addUser, displayUser, updateUser, deleteUser} from "./cb1.js";

const main = ()=>{
    console.clear();
    console.log("********");
    console.log("FS-CLI project");
    console.log("********");
    console.log(`
    0. Press 0 to Exit
    1. Press 1 to Add User
    2. Press 2 to Display User
    3. Press 3 to Update User Age
    4. Press 4 to Delete User 
    `)

    let option = readlinesync.questionInt("Enter your options: ");
    let userName, userAge, userEmail ,user
    
// Here we declar  let userName, userAge,userEmail because we can use the valuses in every function

    switch (option) {
        case 0:
        console.log("Thank you for using our CLI Application, See you Again!");
        return;
        case 1:
            userName = readlinesync.question("Enter the full name: ");
            userEmail = readlinesync.questionEMail("Enter the Email ID: ");
            userAge = readlinesync.questionInt("Enter the age of ther user: ");
            let user = {
             fName:userName,
             email: userEmail,
             age: userAge
            }
     
            addUser(user);
            // here we pass the name object in the addUser function
            return;
        case 2:
            //take userEmail input from the user
            userEmail = readlinesync.questionEMail("Enter the Email ID: ");

            displayUser(userEmail)
            return;
        case 3:
            // take email input then pass the new age from the user
            userEmail = readlinesync.questionEMail("Enter the Email ID: ");
            userAge = readlinesync.questionInt("Enter the age of ther user: ");


            updateUser(userEmail,userAge)
            return;
        case 4:
            userEmail = readlinesync.questionEMail("Enter the Email ID: ");

             deleteUser(userEmail)
            return;
        default:
            console.log("Invlid option");
            break;     
   }
    let willContinue = readlinesync.question("Do you want to continue? (Y/N): ");

    // Handling all this conditions y, Y, yes, YES, Yes, yEs, yES 
    willContinue = willContinue.toLowerCase()
    if(willContinue == 'yes' || willContinue == 'y'){
        main();
    }
    else {
        console.log("Thank you for using our CLI Application, See you Again!");
        return;
    }
}
main()

