// This is a function
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value = toCelsius(43);
  console.log(value + " Farenheit");
  
// A JavaScript Object is an entity that 
//comprises of unordered propeties in key and value pairs

// This is a JavaScript Object disclared  as literal

let student = {studentId : "Matno",
   firstName: "Godswill", 
   lastName: "Oise", 
   Level : "500", 
   FullName: function(){
    return this.firstName + " " + this.lastName;  }};
// Methods are functions that run in an object, and the . is used to fetch a property of an object object.property
    // In Methods, we use the this keyword to call out the values of the properties in an OBJECT
console.log(student);
console.log(student.FullName());
// convert to case
  const Xcase = function(){
    return student.lastName.toUpperCase();
  }
  console.log(Xcase());

//  Object in Loops.
//Using Objet.entries() 
let text = "";
for (let [stud, value] of Object.entries(student)) {
  text += student + ": " + value;
}
  
// constructors
function Person(first, last, age, eye, race) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.Race = race;
}
const myFather = new Person("Roalnd", "Oise", 70, cls
  "fair", "Black");
const myMother = new Person("Grace", "Oise", 62, "dark", "black");
const mySelf = new Person("Godswill", "Oise", "24", "fair", "Black");

