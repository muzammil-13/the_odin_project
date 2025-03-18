// Add the following elements to the container using ONLY JavaScript and the DOM methods shown above:

// 1. a <p> with red text that says “Hey I’m red!”
// 2. an <h3> with blue text that says “I’m a blue h3!”
// 3. a <div> with a black border and pink background color with the following elements inside of it:
// 4. another <h1> that says “I’m in a div”
// 5. a <p> that says “ME TOO!”
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

const container=document.querySelector("#container");
// console.log(container)

const p=document.createElement("p");
// console.log(p)
container.appendChild(p)
// console.log(p)
p.textContent="Hey I'm red";
p.style.cssText="color:red;";