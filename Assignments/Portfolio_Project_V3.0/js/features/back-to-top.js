function backToTop(){
    const btn=document.getElementById("back-to-top");

    window.addEventListener("scroll",()=>{
        btn.classList.toggle("hidden",window.screenY<200);
    });
    btn.addEventListener("click",()=>{
        window.scrollTo({top:0, behavior:"smooth"});
    });
}