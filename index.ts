import  inquirer from "inquirer"

const randomnumber=(Math.floor(Math.random()) * 6 + 1);





const answer = await inquirer.prompt([{
 name:"userGusseuingNumber",
 type:"number",
 message:"Plessae Guess a number"
}])

if(answer.userGusseuingNumber === randomnumber){
    console.log("congratulation you! right number");
}
else{
    console.log("Ohh worng number try again")
}

