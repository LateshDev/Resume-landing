// ==========================================
// SCROLL TO TOP BUTTON
// ==========================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ==========================================
// STICKY NAVBAR
// ==========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==========================================
// FAQ ANIMATION
// ==========================================

const faqItems = document.querySelectorAll("details");

faqItems.forEach(item => {

    item.addEventListener("toggle", () => {

        if(item.open){

            faqItems.forEach(other => {

                if(other !== item){

                    other.removeAttribute("open");

                }

            });

        }

    });

});

// ==========================================
// SIMPLE COUNTER ANIMATION
// ==========================================

const counters = document.querySelectorAll(".stat-card h2");

counters.forEach(counter => {

    counter.style.opacity = "1";

  // ==========================================
// HERO BUTTON RIPPLE EFFECT
// ==========================================

const buttons = document.querySelectorAll(
".primary-btn,.start-btn,.template-btn,.price-btn"
);

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-5px) scale(1.03)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0) scale(1)";

});

});

// ==========================================
// FADE IN ON SCROLL
// ==========================================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

const hiddenElements=document.querySelectorAll(

".feature-card,.template-card,.review-card,.step-card,.stat-card,.info-box"

);

hiddenElements.forEach(el=>{

observer.observe(el);

});

// ==========================================
// CURRENT YEAR
// ==========================================

const year=document.querySelector(".copyright");

if(year){

const currentYear=new Date().getFullYear();

year.innerHTML=© ${currentYear} ResumeFlow. All Rights Reserved.;

}

// ==========================================
// NEWSLETTER
// ==========================================

const form=document.querySelector(".newsletter form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

const input=form.querySelector("input");

if(input.value===""){

alert("Please enter your email.");

return;

}

alert("Thank you for subscribing!");

input.value="";

});

}

// ==========================================
// LOADING ANIMATION
// ==========================================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

// ==========================================
// END OF JAVASCRIPT
// ==========================================

});
