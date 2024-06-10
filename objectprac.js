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
// In Methods, we use the this keyword to call out the values of the properties in an OBJECT
console.log(student);
console.log(student.FullName());
// convert to case
  const Xcase = function(){
    return student.lastName.toUpperCase();
  }
  console.log(Xcase());

// Methods are functions that run in an object, and the . is used to fetch a property of an object object.property


  


