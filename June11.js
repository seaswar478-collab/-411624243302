console.log("Hi")
const a = 10;
console.log(a)
const b = "String"
console.log(b)

const arr = [1, 2.1, "Something", false]
console.log(arr)

arr.push(4)
console.log(arr)

arr.pop()
console.log(arr);

function example(){
    console.log("Appu")
}

const first=document.getElementById("ptag")
first.innerHTML="Paragraph";

const input=document.getElementById("input")
const output=document.getElementById("inputfield")

input.addEventListener("input",()=>{
    output.textContent=input.value
})

const ptag = document.createElement("h1")
ptag.textContent = "Some text"
document.body.appendChild(ptag)

ptag.remove()