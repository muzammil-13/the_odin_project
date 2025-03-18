// Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:

// 1. a <p> with red text that says “Hey I’m red!”
// 2. an <h3> with blue text that says “I’m a blue h3!”
// 3. a <div> with a black border and pink background color with the following elements inside of it:
// 4. another <h1> that says “I’m in a div”
// 5. a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

// results:

const container=document.querySelector("#container");
// console.log(container)

// 1. a <p> with red text that says “Hey I’m red!”
const p=document.createElement("p");
// console.log(p)
container.appendChild(p)
// console.log(p)
p.textContent="Hey I'm red";
p.style.cssText="color:red;";

// 2. an <h3> with blue text that says “I’m a blue h3!”
const h3=document.createElement('h3')
container.appendChild(h3);
h3.textContent="I'm a blue h3!";
h3.style.cssText="color:blue";

// 3. a <div> with a black border and pink background color with the following elements inside of it:
const div=document.createElement("div")
container.appendChild(div)
div.setAttribute("style",'border: 2px solid black;',"background:pink");
// 4. another <h1> that says “I’m in a div”
const h1=document.createElement("h1");
div.appendChild(h1);
h1.textContent="I'm in a div"
// 5. a <p> that says “ME TOO!”
const p2=document.createElement("p");
div.appendChild(p2)
p2.textContent="ME TOO!"