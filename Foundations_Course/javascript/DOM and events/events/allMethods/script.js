// method1
function alertFunction(){
    alert("Yay! you did it!")
}

const btn=document.querySelector("#btn");

// method2
btn.onclick=alertFunction;

// method3
btn.addEventListener("click",alertFunction);

// access event info
btn.addEventListener("click",function(e){
    console.log(e);
});

// log target information
btn.addEventListener("click",function(e){
    console.log(e.target);
});

// change button background color 
btn.addEventListener("click",function(e){
    e.target.style.background="blue";
});

// Attaching listeners to groups of nodes
// buttons is a node list. It looks and acts much like an array.
const buttons=document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button)=>{
      // and for each one we add a 'click' listener
    button.addEventListener("click",()=>{
        alert("This is " + button.id);
    });
});