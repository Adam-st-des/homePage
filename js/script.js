const body= document.querySelector(".body__page");
const button= document.querySelector(".body__button");
const word= document.querySelector(".themeName");
const change= document.querySelector(".changeColor");

 button.addEventListener("click", () => {
    body.classList.toggle("changeColor")
   if(body.classList.contains("changeColor")){word.innerHTML="różowy"}
    else{word.innerHTML="jasnoróżowy"}
 })