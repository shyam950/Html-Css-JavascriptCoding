//console.log("hi");
//window.alert("love");
/*let age = 21;
let name = "shyam";
let mstatus = true;
console.log(age);
console.log(mstatus);
console.log(name);
document.getElementById("p1").innerHTML = age;
document.getElementById("p2").innerHTML = "im " +name;
document.getElementById("p3").innerHTML = !mstatus;*/
/*let username = window.prompt("enter username");
console.log(username);*/
/*let username;
document.getElementById("myButton").onclick = function(){
username = document.getElementById("myText").value;
console.log(username);
}*/
/*let username;
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myh1").textContent = "Hello "+username;
}*/
/*age = window.prompt("enter age");
age = Number(age);
age+=1;
console.log(age,typeof age);*/
/*let mstatus;
mstatus = window.prompt("enter mstatus");
mstatus = Boolean(mstatus);
console.log(mstatus,typeof mstatus);*/
/*let radius;
let circumference;
const PI = 3.14;
document.getElementById("myButton").onclick = function(){
   radius =  document.getElementById("myText").value;
    radius = Number(radius);
    circumference = PI *radius *radius;
    document.getElementById("myH3").innerHTML = circumference;
}*/
  //Counter Program
/*
let count = 0;
document.getElementById("myButton1").onclick = function(){
    count = count+1;
    document.getElementById("myLabel").textContent = count;
}
document.getElementById("myButton2").onclick = function(){
    count = count-1;
    document.getElementById("myLabel").innerHTML = count;
}
document.getElementById("myButton3").onclick = function(){
    count = 0;
    document.getElementById("myLabel").textContent = count;
}*/
/*let randomnumber;
let max = 100;
let min = 10;
document.getElementById("myButton").onclick = function(){
 randomnumber = Math.floor(Math.random()*(max-min))+min;
 document.getElementById("label1").textContent = randomnumber;
}*/
/*document.getElementById("mySubmit").onclick = function(){
    if(myCheckBox.checked){
        document.getElementById("myresult").textContent = "Your Subscribed";
    }
    if(myRadio1.checked){
        document.getElementById("mypay").textContent = "Your using visacard";
    }
    if(myRadio2.checked){
        document.getElementById("mypay").textContent = "Your using debitcard";
    }
    if(myRadio3.checked){
        document.getElementById("mypay").textContent = "Your using phonepe";
    }

}*/
/*Method Chaining : username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
Input : sHYam
Output : Shyam*/
 /* = Assignment operator
   == Comparison operator ,compares if values are equal
   === Strictly equality operator compares if values and datatypes are equal
   !== Strict inequality operator */
   /*let username;
   let password;
   let login = false;
   while(!login){
    username = window.prompt("enter username");
    password = window.prompt("enter password");
    if(username === "shyam" && password ==="password"){
        console.log("you are logged");
        login = true;
    }
    else{
        console.log("invalid login");
    }
   }*/
  // Number guessing game
 /* let min = 1;
  let max = 100;
  let answer = Math.floor(Math.random()*(max-min)+min);
  let guess;
  let correct = true;
  let attempts = 0;
  while(correct){
     guess = window.prompt("enter guess number");
     guess = Number(guess);
    if(guess > max && guess < min){
        window.alert("enter valid number");
    }
   else if(isNaN(guess)){
        window.alert("enter valid number");
    }
    else{
        attempts++;
        if(guess > answer){
            window.alert("entered value is high");
        }
        else if(guess < answer){
            window.alert("entered value is low");
        }
        else{
            window.alert("entered value is correct with attempts " +attempts);
            correct = false;
        }
        
    }

  }*/
 // functions
 /*function add(a,b){
    return a+b;
 }
 console.log(add(1,2));
 function isEmail(email){
    if(email.includes("@gmail.com")){
        return true;
    }
    else{
        return false;
    }
 }
 console.log(isEmail("shyam@gmail.com"));*/

 //tempature conversion
 /*let temp;
 document.getElementById("mySubmit").onclick = function(event){
    event.preventDefault();
    if(document.getElementById("myRadio1").checked){
        temp = Number(document.getElementById("TextBox").value);
        temp = temp*9/5 + 32;
        document.getElementById("p1").innerHTML = temp.toFixed(1) +" F";
    }
    else if(document.getElementById("myRadio2").checked){
        temp = Number(document.getElementById("TextBox").value);
        temp = (temp - 32) *(5/9);
        document.getElementById("p1").innerHTML = temp.toFixed(1) + " C";
    }
    else{
        document.getElementById("p1").textContent = "select any one";
    }
 }*/
 // arrays in Javascript
 /*  let arr = [1,2,3]; 
      console.log(arr[1]);  output : 2 
      let fruits = ["orange","apple","pineapple"]; 
      fruits[1] = "coconut"
      console.log(fruits[1]); output : coconut
            Enhanced forloop
            let fruits = ["apple", "banana", "Mango", "Coconut"];
            for(let i of fruits){
             console.log(i);
             } output : apple banana Mango Coconut  in each line
              fruits.sort().reverse(); it will sort elements  in reverse order */
    // spread operator
    /*let username = "shyam nadella";
    let letters = [...username];
    console.log(letters);
    let num = [1,2,3,4,6,12,3];
    let Maximum = Math.max(...num);
    console.log(Maximum);
    let fruits = ["apple","banana","coconut"];
    let vegetables = ["carrot", "radish","cabage"];
    let uname = [...fruits,...vegetables,"egg","potato"];
    console.log(uname);*/
    // rest parameters 
   /* function openFood(...food){
        console.log(food); 
    }
    let food1 = "biryani";
    let food2 = "rice";
    let food3 = "dinner";
    openFood(food1,food2,food3);*/
    // spread = expands the array into separate elements
    // rest parameters = bundles elements into an array
    
      //Dice Roller
    /*document.getElementById("myButton").onclick = function(event){
        event.preventDefault();
        let values = [];
    let images = [];
       let Num =  document.getElementById("myTextbox").value;
       Num = Number(Num);
       for(let i = 0; i < Num; i++){
       let randomNum = Math.floor(Math.random()*6)+1;
        values.push(randomNum);
        images.push(`<img src="images/${randomNum}.png">`);
       }
       document.getElementById("Result1").textContent =  values.join(', ');
       document.getElementById("Result2").innerHTML = images.join('');
    }*/
    // callbacks
    /* callback = callback is a function that is passed as argument to a another function
       used to handle asynchronous operations
        1. Reading a file
        2. Network Requests
        3. Interacting with a databases*/
        //eg:
  /*function Hello(callback){
    console.log("shyam");
    callback();
  }
  function Goodbye(){
    console.log("Good");
  }
  Hello(Goodbye);*/
 /* function add(x,y,callback){
    let result = x+y;
    callback(result);

  }
  function output(result){
   console.log(result);
  }
  add(1,3,output);*/

  // forEach()
 /* let numbers = [1,2,3,4,5];
  numbers.forEach(display);
  function display(element){
    console.log(element);
  }   output : 1 2 3 4 5  in new line */
// .map() = accepts a callback and applies that function
// to each element of an array, then  return a new array
/*const numbers = [1,2,3,4,5];
console.log(numbers.map(cubes));
function cubes(element){
return Math.pow(element, 3);
}*/
// .filter() = creates a new array  by filtering out elements
/*let numbers = [1, 2, 3,4,5];
console.log(numbers.filter(isEven));
function isEven(element){
    return element%2 == 0;
}*/
// .reduce() = reduces the elements  of an array to a single value
 /*let numbers = [2,3,1,3,4,5];

function sum(prev,next){
    return prev + next;
 }
 console.log(numbers.reduce(sum));*/

 // function expressions = a way to define functions as values or variables
/*const hello = function(){
    console.log("Hello shyam");
}
hello();   // output : Hello shyam
numbers = [1,2,3,4,5];
const square = numbers.map(function(element){
 return Math.pow(element,2);
});
console.log(square);*/

 // Arrow functions = a concise way to write function expressions good for
 // simple functions that you use only once(parameters) => some code
 /* const hello = (name) => {console.log("Hello "+name)
                        console.log("you are old")
  };
  hello("shyam");
 let numbers = [1,2,3,45];
 const sum = numbers.map((element,prev) =>element + prev)
 console.log(sum);*/

 // objects = A collection of related properties and/or methods
 // can represent real world objects(people, products, places)
 // object = {key:value,function()}
 // object name should be unique below eg, person is object name
 /*const person = {
    firstName : "Shyam",
    lastName : "Nadella",
    age : 20,
    Hello : function(){console.log("Hi");

    },
 };

 console.log(person.firstName);
 console.log(person.lastName);
 person.Hello(); */ //output : Shyam Nadella Hi in new line

 // this  = reference to the object where THIS is used
 //        (the object depends on the immediate context)
 //         person.name = this.name
 // this keyword is not used in arrow functions
    /* const person1 = {
            firstName : "Shyam",
            lastName : "Nadella",
            age : 20,
            Hello : function(){console.log(`Im ${this.age} old`);}
     }
     person1.Hello();*/

// Constructor = it is a special method for defining the properties and methods of objects 
/* function Car(a,b,c,d){
  this.a = a,
  this.b = b,
  this.c = c,
  this.d = d,
  this.drive = function(){console.log("You drive " +this.a)}
 }
  const car1 = new Car("suzuki","scross","ap","39");
  car1.drive();*/

  //class = (ES6 feature) provides a more structured and cleaner way to
  //work with objects compared to traditional constructor function
  // ex : static keyword,encapsulation, inheritance
  // there is no need to write function keyword and constructor name inside the class 
  //class is reusable
 /* class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(this.name);
        console.log(this.price);
    }
  }
  const pro = new Product("shirt",30);
  pro.displayProduct();*/

  // static  = keyword that defines properties or methods that belongs to a class
  // it self rather than the objects created from that class
  // when we define any variable or method with static keyword we access them in classname.propertyname
  /*class Math{
    static PI = 3.14;
    static display(){
        console.log("Hi");
    }
  }
  console.log(Math.PI); // output : 3.14
  Math.display(); */

  // inheritance = allows the new class to inherits the properties and methods from existing class(parent --> child)
  // helps with code reusability
  // super() = super keyword is used to call a parent class constructor from child class to access the properties of parent class
  /*class Student{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
  }
  class Employee extends Student{
    constructor(name,age,salary){
        super(name,age);
        this.salary = salary;
        console.log(this.name,this.age,this.salary);
    }
  }
  const emp = new Employee("shyam","20","1000");
  console.log(emp.name);*/

  // setters and getters
 //setter = special method that makes the property writeable
 //getter = special method that makes the property readable
 // validates and modify a value when reading/writing a property
   //destructuring =  extract the values from arrays and objects then assign them to variables in convenient way
   //[] = to perform array destructuring
   //{} = to perform object destructuring
  //Eg:1 swap two numbers
  /*let a = 10;
  let b = 20;
  console.log(a);
  console.log(b);
  [a,b] = [b,a];
  console.log(a);
  console.log(b);*/
  //Eg:2 swap two elements in an array
   /*let a = ["red","orange","white"];
   [a[0],a[2]] = [a[2],a[0]];
   console.log(a);*/
 //Eg:3 Assign array elements to variables
   /*let a = [1,2,3,4,5];
   let[b,c,d,...e] = a;
   console.log(b);
   console.log(c);
   console.log(d);
   console.log(e);*/
 //Eg: Extract values from objects
/* const person1 = {
    firstName:"shyam",
    lastName:"nadella",
    age:20,
 }
 const person2 = {
    firstName: "shyam1",
    lastName: "nadella1", 
 }
 const{firstName,lastName} = person1;
 console.log(firstName);*/
  //Eg:DESTRUCTURE in function parameters
  /*function display({empid,gender}){
  console.log(empid);
  console.log(gender);
  } 
  const person = {
    empid:12,
    gender:"male",
  }
  display(person);*/
 // nested objects = objects inside of other objects.
 //Allows you to represent more complex datastructures
 //child object is enclosed by parent object
 // Person{Address{}, ContactInfo{}}
 // ShoppingCart{keyboard{},Mouse{},Monitor{}}
 /*const person = {
    fullName: "shyam",
    age:20,
    hobbies: ["gaming","reading"],
    address:{
        street: "colony",
        city : "rajahmundry",
        country: "india",
    }
 }
 console.log(person.fullName);
 console.log(person.address.country);*/
 /*const person1 = {
    fullName: "shyam",
    age:20,
    hobbies: ["gaming","reading"],
    address:{
        street: "colony",
        city : "rajahmundry",
        country: "india",
    }
 }
 for(const prop in person1.address){
    console.log(person1.address[prop]);
 }*/
 // Array Object
 /*const fruits = [{name:"apple",color:"red",cal:90},
                 {name:"orange",color:"blue",cal:100},
                 {name:"banana",color:"pink",cal:110},];
 console.log(fruits[0].color);
 fruits.forEach(fruit => console.log(fruit.name));
 console.log(fruits.map(fruit =>fruit.color));*/
  //sort() = method used to sort elements of array
  /*let numbers = [1,3,4,1,33,5];
  numbers.sort((a,b) =>a-b);
  console.log(numbers);*/
  /*const people = [{name:"shyam",age:20},
                  {name:"shyam1",age:25}, 
                  {name:"shyam2",age:23},
  ];
  people.sort((a,b)=>a.age-b.age);
  console.log(people);*/
  //Date
  /*const date = new Date();
  console.log(date);*/
  /*const date = new Date();
  console.log(date.getFullYear());
  console.log(date.getMonth());
  console.log(date.getDate());
  console.log(date.getHours());
  console.log(date.getDay()); */
  /*const date = new Date();
  date.setFullYear(2024);
  date.setMonth(1);
  date.setDate(1);
  date.setHours(2);
  console.log(date);*/

  //setTimeout() = function in javascript that allows you to schedule
                   //the execution of a function after an amount of time(milliseconds)
                   // Times are approximate (varies based on the workload of the Javascript runtime env)

  /*function Hello(){
    window.alert("shyam");
  }
  setTimeout(Hello,5000); //output : it displays the output in 5 milliseconds
   const a = setTimeout(function(){window.alert("Hello")},3000); // this 2 lines will give Hello and shyam
  clearTimeout(a); // it will delete the Hello message*/
  //Eg:
  /*function startTimer(){
    setTimeout(() =>window.alert("HI IM SHYAM"),4000);
  }*/
  //Clock
  /*function digitalClock(){
    const date = new Date();
    let hours = date.getHours()
    const meridian = hours>=12?"AM":"PM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const min = date.getMinutes().toString().padStart(2,0);
    const sec = date.getSeconds().toString().padStart(2,0);
    const time = `${hours}:${min}:${sec} ${meridian}`;
    document.getElementById("clock").textContent = time;
  }
  digitalClock();
  setInterval(digitalClock,1000);*/

   //stopwatch
  /* let seconds = 0;
   let minutes = 0;
   let hours = 0;
   let timer = null;
   const a = document.getElementById("display");
   function stopwatch1(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes++;
    
    if(minutes == 60){
        minutes = 0;
        hours++;
     }
    }
    let h = hours < 10? "0"+hours : hours;
    let m = minutes < 10? "0"+minutes : minutes;
    let s = seconds < 10? "0"+seconds : seconds;
    a.innerHTML = h +":"+ m+":"+ s;
   }
   function startwatch(){
    if(timer!== null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch1,1000);
   }
   function stopwatch(){
    clearInterval(timer);
   }
   function resetwatch(){
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    a.textContent = seconds+"0"+":"+minutes+"0"+":"+hours+"0";
    
   }*/
  // ES6 Module = An external file that contains reusable code
  // that can be imported into either javascript files.
  // write reusable code for many different apps
  // can contain variables , classes, functions and more
  // introduced as part of ECMAScript 2015 update

  // synchronous = Executes line by line consecutively in a sequential manner
  // Code that waits for an operation to complete
  // asynchronous = Allows multiple operations to be performed concurrently without waiting
  //                Doesnt block the execution flow and allows the program to continue
  //                (I/O operations, network request, fetching data)
  //                Handled with : Callbacks, Promises, Async/Await

  // Error = An object that is created to represent a problem that occurs
  // occurs often with user input or establishing a connection
  // try { } = Encloses code that might potentially cause an error
  // catch{ } = Catch and handle any thrown Errors from try { }
  // finally { } = {optional} Always executes. Used mostly for clean up
  //                ex : close files, close connections, release resources.
   /*try{
    console.log(x);
   }
   catch(e){
    console.error(e);
   }
   finally{
    console.log("This ");
   }
   console.log("Hi");*/
  /*try{
    let divdent = window.prompt("enter divident");
    let divisor = window.prompt("enter divisor");
    if(divisor == 0){
        throw new Error("You cant divisible by 0");
    }
    let res = divident/divisor;
    console.log(res);

  }
  catch(e){
    console.error(e);
  }
  console.log("Hi");*/
   


    