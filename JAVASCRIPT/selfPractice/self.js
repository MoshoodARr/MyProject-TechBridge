// alert("Warning! This message will self-destruct in");

// alert("3...");

// alert("2...");

// alert("1...");

// document.querySelector("h1").textContent = "BOOM!"

// document.write("h1");

// console.log("Message destroyed!");


// DECLARING A VARIABLE
// var score = 0;
// score += 10;
// score += 5;

// var bonuPnts = 100;
// var finalScore = score + bonuPnts;

// console.log(finalScore);



// Create an Object with property name:value inside the curley braces
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue",
//     };

// Create an empty Object
// const person = {};

// // Add Properties
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue"; 

// Display Data from Object
// document.getElementById("demo").innerHTML =
// person.firstName + " is " + person.age + " years old.";



// Create an Object using new Object
// const person = new Object()
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";


// Object constructor function
function Person(first, last, age, height){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.height = height;
}

const myFather = new Person("raheem", "kajo", "70", "10");
// Display Data from Object
document.getElementById("demo").innerHTML =
myFather.firstName + " is " + myFather.age + " years old.";




