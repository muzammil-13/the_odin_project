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