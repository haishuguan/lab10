var age = prompt("What is your age?");
console.log(age);
var date = new Date();
var year = date.getFullyear();
var birthYear = year - age;
document.getElementById("para").innerHTML = birthYear;
