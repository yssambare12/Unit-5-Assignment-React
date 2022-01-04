import("./index.css")

import logo from '../logo/Notes_Logo.png';


const logoDiv = document.getElementById("logoDiv"); 

const Box = document.getElementById("Box");

const btn = document.getElementById("btn");
const btnClear = document.getElementById("btnClear");

btn.addEventListener("click", addNote);

btnClear.addEventListener("click", clearAll);

let count = 1;

let img = document.createElement("img");
img.src = logo;
img.setAttribute("class", "imgSize")
logoDiv.appendChild(img)

function addNote() {

    let input = document.getElementById("inputBox").value;

    let p = document.createElement("p");
    p.textContent = count + ") " + input;
    p.setAttribute("class", "points")
    count++;

    Box.appendChild(p);

}

function clearAll() {
    Box.innerHTML = null
}