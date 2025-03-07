function lastLetter(str){
    return str.charAt(str.length-1)  
}

let string=prompt("Enter a string:")
let result=lastLetter(string)
console.log(result)
document.getElementById('output').textContent=result