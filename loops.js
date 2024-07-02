// // Using the while loop
//         let number = 3;
//         let counts ="";
// // Exceute until 500
//         while (number != 500) {
//             number = number += 1;
//             counts = counts+ number +  "\n";

        // }      
        // console.log(counts);


// let nuMber = 5;
// let text = "";

// while (nuMber < 10){
//         text += "I am not happy with Javasscript " + nuMber + "\n"; 
//         nuMber++;
       
// }


// // console.log(text);
// let i = 1;
// while (i >0){
//          i++;
//         if(i === 16 ){console.log("I omitted Number 16");
//                 continue;}
        
          
//         if (i === 26){ 
//         console.log("This is number 25,\n Let's stop here!");
//          break;
// }      
//  console.log(i);

// }
     
// let text = ""; 
// for (let i = 0; i < 10; i++) {
//         if (i === 3) { continue; }
//         text += "The number is " + i + "\n";
//       }

// console.log(text);


// for(let i = 1; i < 101; i++){
//         if (i % 3 === 0) console.log("Fizz");
//         else if (i% 5 ===0) console.log("Buzz");
//         else console.log(i);
        
// }


// let x = 1;
// while(x <100){
//         x++;
//         if (x % 3 === 0) console.log("Fizz");
//         if (x% 5 === 0) console.log("Buzz");
//         else console.log(x);

// }

//Palidrome
function palindrome(str){
        const reverse = str.split("").reverse().join("");
        return str === reverse;
}
console.log(palindrome("tit"));
console.log(palindrome("toy"));