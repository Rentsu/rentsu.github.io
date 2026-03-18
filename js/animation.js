window.addEventListener("scroll", () => {
document.querySelectorAll("section").forEach(sec=>{
const pos = sec.getBoundingClientRect().top;
if(pos < window.innerHeight - 100){
sec.style.opacity=1;
sec.style.transform="translateY(0)";
}
});
});