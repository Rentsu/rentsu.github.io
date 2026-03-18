const toggle = document.getElementById("theme-toggle");

toggle.onclick = () => {
document.body.classList.toggle("light");
localStorage.setItem("theme", document.body.classList.contains("light"));
};

window.onload = () => {
if(localStorage.getItem("theme") === "true"){
document.body.classList.add("light");
}
document.getElementById("preloader").style.display="none";
};

const texts=["websites.","apps.","experiences."];
let i=0,j=0;

function type(){
if(j<texts[i].length){
document.getElementById("typewriter").innerHTML += texts[i][j];
j++;
setTimeout(type,100);
}else{
setTimeout(()=>{
document.getElementById("typewriter").innerHTML="";
j=0;
i=(i+1)%texts.length;
type();
},1500);
}
}
type();