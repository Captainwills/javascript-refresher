// // Using the if else and else if statement 

// // const password = prompt("Enter your password: ");
// // if (password === "Json") 
// //     {
// //         console.log("Access granted");
// //        }
// //        else if (password === "json" )
// //         {
// //             console.log("acess granted");
// //         }
// //         else {
// //             console.log("access denied");

// //             }
        
    //  Using the for loop
// const food = ["Rice", "Yam", "beans", "Maize", "pea"];
// const clothes = ["baggy", "Tshirt", "trouser", "jeans", "sleeves"];
//     for (const clothe of clothes) 

//         {
//             console.log(clothe);    
//         }
// using keyword function and symbol ()=>?
function printTimeout1() {
    console.log("Time out");
}
const printTimeout2 = ()=> {
    console.log("Time out ..... again");
} 
setTimeout(printTimeout1, 2000);
setTimeout(printTimeout2, 5000);
setTimeout(()=> {
    console.log("More timing out....");
}, 8000);

// function trueTimeout() {
//     console.log("I am the true timeout function called with a nameless function assigned to a variable " + " now welcome");
// }

// const prompt = require("prompt-sync")();
// const userInput = ()=> {
//     prompt("Enter password: ");
//   }
//   userInput();
// if (userInput() === "Jason") {
//     //   return trueTimeout;
//       console.log("welcome");
//        }


// Using the Spread operator which is  ...
// The spread operator is used to remove elements from and another list by spreading(dis-array) and putting 
// them into another array
{
    const food = ["Rice", "Yam", "beans", "Maize", "pea"];
    const clothes = ["baggy", "Tshirt", "trouser", "jeans", "sleeves"];
  
    const newarray = [...food, ...clothes];
    console.log(newarray);
  }
  
  
  let userMessage = "Hello"; //this is promitive
  const newUser = userMessage.concat("will!");
  console.log(newUser);