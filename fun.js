// Ternary operator expression ? execute if true : execute if false

let age = 9;
console.log(age>=18?"Lets Go":"Getout")

// Template literals = delimited with (`)
let username ="vignesh"
let temp = `<span >Hey ${username} how are u buddy</span>`
console.log(temp)

document.getElementById("msg").innerHTML = temp;
 
//toLocaleString()

let aamt = 1000.674;
console.log(`English USA ${aamt.toLocaleString("en-US")}`);
console.log(`Hindi India ${aamt.toLocaleString("hi-IN")}`);
console.log(`US Dollars ${aamt.toLocaleString("en-US", {style:"currency",currency:"USD"})}`);
console.log(`Indian Rupee ${aamt.toLocaleString("en-IN", {style:"currency",currency:"INR"})}`);
console.log(`Euro ${aamt.toLocaleString("de-DE", {style:"currency",currency:"EUR"})}`);
console.log(`Euro ${aamt.toLocaleString("en-GB", {style:"currency",currency:"EUR"})}`);
// console.log(`Euro ${aamt.toLocaleString(undefined, {style:"unit", unit:"Celsius"})}`);


function myFunction(p1, p2) {
    return p1 * p2;
  }

  function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }

  const funny = function (){
    return "hello"
  }
