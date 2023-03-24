var t=1;
function blur() {
   
   console.log("reached");
   document.getElementById("mainpage").style.opacity = "0.5";
var x= document.createElement("<box-icon name='info-circle' type='solid' animation='fade-up' color='#1cc20a' ></box-icon>")
}
if (t==1){
   document.getElementById("mainpage").style.opacity = "1";
    t=0;} 
const b = document.getElementById("b1");
b.addEventListener("click",blur);
const c = document.getElementById("clear");
c.addEventListener("click", clear);
function clear() {
   console.log("reached");
   document.getElementById("mainpage").style.opacity = "1";
}
const icons=document.getElementsById("icon1");
icons.addEventListener("mouseover",icon1.style.backgroundColor="red");
const s=document.getElementById("submitbutton")
s.addEventListener("click",change);
function change()
{ console.log("submit");
   const h=document.getElementById("submitbutton").innerHTML=" submmited";
}