const inputSlider= document.querySelector("[data-lengthSlider]")
const lengthDisplay= document.querySelector("[data-lengthNumber]")
const passwordDisplay= document.querySelector("[data-passwordDisplay]")
const copyMsg=document.querySelector("[data-copyMsg]")
const uppercase=document.querySelector("#uppercase")
const lowercase=document.querySelector("#lowercase")
const numbers=document.querySelector("#numbers")
const symbols=document.querySelector("#symbols")
const indicator=document.querySelector("[data-indicator]")
const generatebtn=document.querySelector(".generatebutton")
const allcheckbox=document.querySelectorAll("input[type=checkbox]")

let password="";
let passwordength=10;
let checkcount=1;

//pswd length setter
function handleSlider(){
    inputSlider.value=passwordength;
    lengthDisplay.innerHTMl=10;

}
