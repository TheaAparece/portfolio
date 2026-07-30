window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.style.background="rgba(0,0,0,0.8)";
    }
    else{
        nav.style.background="rgba(0,0,0,0.5)";
    }

});