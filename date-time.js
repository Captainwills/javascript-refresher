const Today = new Date(2024, 5, 17, 13, 45);
console.log(Today.toString());

// parsing Millisec
let msec = Date.parse(1332284400000);
const d = new Date(msec);
console.log(d);

const date = new Date();
date.setFullYear(2024);
date.setMonth(5);
date.setDate(17);
date.setHours(14);
date.setMinutes(4);
date.setSeconds(55);

console.log(date.toString());

//maths functions
//math.random(); always return random value from 0-1
// But using Math.floor(Math.random*() x); will generate random intergers from 0 to higher values than 1

const randomValue = Math.random();
console.log(randomValue);

const randomNumber = Math.floor(Math.random()* 101);
console.log(randomNumber);
