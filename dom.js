/*document.title = "My Website";
document.body.style.backgroundColor ="blue";
console.log(document);*/
/*const myH1 = document.getElementById("myH1");
const username= "Good Morning";
myH1.textContent += username===""?"Guest" :" "+username;
 const p1 = document.getElementById("p1");
 p1.style.color = "Red";*/

 //DOM
    //element selectors = Methods used to target and manipulates HTML elements
    //                    They allow you to select one or multiple HTML elements
    //                     from the DOM
    //1. document.getElementById()   // Element or null
    //2. document.getElementsClassName()  // HTML Collection
    //3. document.getElementsByTagName()  // HTML Collection
    //4. document.querySelector()  //Element or Null
    //5. document.querySelectorAll()  // Nodelist

    //DOM Navigation = The process of navigating through the structure of an 
    //                  HTML document using Javascript.

    // .firstElementChild
    // .lastElementChild
    // .nextElementSibiling
    // .previousElementSibiling
    // .parentElement
    //.children
    // -------------firstElementChild------------
    /*const element = document.getElementById("fruits");
    const firstChild = element.firstElementChild;
    firstChild.style.backgroundColor = "yellow";*/
    /*const ulelement = document.querySelectorAll("ul");
    ulelement.forEach(ulelement =>{
    const firstElement = ulelement.firstElementChild;
    firstElement.style.backgroundColor = "yellow";
});*/
// -------lastElementChild----------
/*ulelement.forEach(ulelement =>{
    const lastElement = ulelement.lastElementChild;
    lastElement.style.backgroundColor = "green";
});*/
/*const myH1 = document.createElement("h1");
myH1.textContent = "Hi";
//document.body.append(myH1); // it will display at bottom
//document.body.prepend(myH1); // it will display at top
myH1.id="my1";
myH1.style.color = "green";
myH1.style.textAlign = "center";
document.getElementById("box1").append("my1");
const box2 = document.getElementById("box2");
document.body.insertBefore(myH1,box2);*/

//eventListener = Listen for specific events to create interactive web pages
//                events: click, mouseover, mouseout
//                .addEventListener(event, callback);