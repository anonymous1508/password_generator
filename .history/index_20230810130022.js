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
handleSlider();
let symbol="`,!@#$%^&*()_+:?><';\|.";

//pswd length setter
function handleSlider(){
    inputSlider.value=passwordength;
    lengthDisplay.innerHTML=passwordength;

}
function setIndicator(color){
    indicator.style.background=color;
}
function getRndInteger(min,max){
    Math.floor(Math.random()*(max-min))+min;
}
function generaterandomnumber(){
     return getRndInteger(0,9);
}
function generatelowercase(){
   return String.fromCharCode(getRndInteger(97,123));
}
function generateuppercase(){
   return String.fromCharCode(getRndInteger(65,91));
}
function generatesymbol(){
    const rand=getRndInteger(0,symbol.length);
    return symbol.charAt[rand];
}
function calcstrength(){
    let hasupper=false;
    let haslower=false;
    let hasnum=false;
    let hassym=false;
    if(uppercase.checked) hasupper=true;
    if(lowercase.checked) haslower=true;
    if(numbers.checked) hasnum=true;
    if(symbols.checked) hassym=true;
    if(hasupper && haslower && (hasnum || hassym) && passwordength>=8){
        setIndicator("#0f0");
    }
    else if((haslower ||hasupper)&&
    (hasnum || hassym) && passwordength>=6){
        setIndicator("#ff0");
    }
    else {
        setIndicator("#f00");
    }
}
async function copycontent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText="copied";
    }
    catch(e){
        copyMsg.innerText="failed";
    }
    copyMsg.classList.add("active");
    setTimeout(()=>{
        copyMsg.classList.remove("active");
    },2000);
   
}
function handlecheck(){
    checkcount=0;
    allcheckbox.forEach((checkbox)=>{
        if(checkbox.checked){
            checkcount++;
        }

    })
}
allcheckbox.forEach((checkbox)=>{
    checkbox.addEventListener('change',handlecheck);
})
inputSlider.addEventListener('input',(e) => {
    passwordength=e.target.value;
    handleSlider();
});
generatebtn.addEventListener('click',()=>{
    if(checkcount<=0) return;
    if(passwordength<checkcount){
        passwordength=checkcount;
        handleSlider();
    }
    password="";
    if(uppercase.checked){
        password+= generateuppercase();
    }
    if(lowercase.checked){
        password+= generatelowercase();
    }
    if(numbers.checked){
        password+= generaterandomnumber();
    }
    if(symbols.checked){
        password+= generatesymbol();
    }
    passwordDisplay.innerText=password;
    calcstrength();



});


