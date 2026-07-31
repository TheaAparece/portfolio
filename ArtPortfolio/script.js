/* ==========================================
   PORTFOLIO V3
========================================== */

/* ================================
   HERO PARALLAX
================================ */

const heroImage = document.querySelector(".hero-background img");

window.addEventListener("scroll", () => {

    const scroll = window.scrollY;

    heroImage.style.transform = `scale(${1 + scroll * 0.00008})`;

    heroImage.style.filter = `brightness(${1 - scroll * 0.00015})`;

});


/* ================================
   WINDOW REVEAL
================================ */

const sections = document.querySelectorAll(".window, .contact-window");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

sections.forEach(section => {

    observer.observe(section);

});


/* ================================
   IMAGE HOVER
================================ */

document.querySelectorAll(".image-window img").forEach(image => {

    image.addEventListener("mouseenter", () => {

        image.style.transform = "scale(1.01)";

    });

    image.addEventListener("mouseleave", () => {

        image.style.transform = "scale(1)";

    });

});


/* ================================
   GALLERIES
================================ */

document.querySelectorAll(".gallery-slider").forEach(gallery=>{

    const slides=gallery.querySelector(".slides");

    const images=gallery.querySelectorAll(".slide");

    const next=gallery.querySelector(".next");

    const prev=gallery.querySelector(".prev");

    let current=0;

    function update(){

        slides.style.transform=`translateX(-${current*100}%)`;

    }

    next.addEventListener("click",()=>{

        current++;

        if(current>=images.length){

            current=0;

        }

        update();

    });

    prev.addEventListener("click",()=>{

        current--;

        if(current<0){

            current=images.length-1;

        }

        update();

    });

});

/* ================================
   CONTACT CARD
================================ */

const contact = document.querySelector(".contact-window");

if (contact) {

    contact.addEventListener("mouseenter", () => {

        contact.style.transform = "translateY(-5px)";

    });

    contact.addEventListener("mouseleave", () => {

        contact.style.transform = "translateY(0)";

    });

}


/* ================================
   CONSOLE MESSAGE
================================ */

console.log(

"%c🎨 Welcome to our Art Portfolio!",

"background:#111;color:#fff;font-size:18px;padding:10px;border-radius:6px;"

);