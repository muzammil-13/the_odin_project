function capitalize(str){
    let str1=str.slice(0,1).toUpperCase()
    let str2=str.slice(1).toLowerCase()
    return str=str1+str2
}

let string=prompt("Enter a string: ")
let result=capitalize(string)
console.log(result)

document.getElementById('output').textContent=result