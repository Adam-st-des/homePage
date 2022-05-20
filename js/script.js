const toggle = ()=> {
   const word= document.querySelector(".themeName");
   const change= document.querySelector(".changeColor");
   const body= document.querySelector(".body__page");
body.classList.toggle("changeColor")
word.innerHTML=body.classList.contains("changeColor")? "różowy" : "jasnorózowy";

 }
 const init = ()=> {
   const button= document.querySelector(".body__button");
button.addEventListener("click", toggle);

 }
 init();