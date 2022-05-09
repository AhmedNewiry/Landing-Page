
/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
//assiging the ul element to a global variable
const navLinks=document.querySelector("#navbar__list");
//creating an array from the all sections after selecting them
const secElmentArray =document.querySelectorAll("section");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//looping over all section and populating ul element
function addNavLinks(){  
    for(let secElement of secElmentArray){
        let navLink=document.createElement("li"); 
        navLink.setAttribute("class","link");
        navLink.setAttribute("data-bac",secElement.id);
        navLink.innerHTML=`<a class="menu__link" href="" data-scroll="${secElement.id}">${secElement.dataset.nav}</a>`; 
        //appending the created li elements before the closing tag of the ul element 
        navLinks.appendChild(navLink);   
    }          
    
}

addNavLinks();



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav



// Add class 'active' to section when near top of viewport and to each link in the navigation bar
const menuLiElements=document.querySelectorAll(".link");
window.addEventListener("scroll",()=>{
    //Detecting the point where the section top border will meet the view port
    let secBorderPosition=0;   
    for(let secElement of secElmentArray){
        if(secBorderPosition>=secElement.getBoundingClientRect().top-secElement.offsetHeight*.2 && secBorderPosition<secElement.getBoundingClientRect().top+secElement.offsetHeight){
            console.log(secElement.getBoundingClientRect().top);
            //adding active state to the section in the viewport
            secElement.classList.add("your-active-class");
            // Add an active state to navigation items when a section is in the viewport.
            menuLiElements.forEach((element)=>{
                if(secElement.id===element.dataset.bac){
                    element.style.cssText="background-color:#04AA6D;"
                    element.firstElementChild.style.cssText="color:white;"
                }else{
                    element.style.cssText="background-color:white;;"
                    element.firstElementChild.style.cssText="color:black;"
                }   
            })
        }else{
            //removing active state from other sections
            secElement.classList.remove("your-active-class");
        }
    }    
})


// Scroll to anchor ID using scrollTO event
//selecting all links inside ul element
const menuLinks=document.querySelectorAll(".menu__link");
//applying a forEach loop that targets all links
menuLinks.forEach((link)=>{
    //adding an event listner to each link
    link.addEventListener("click",(event)=>{
        event.preventDefault(); 
        //selecting the section to be scrolled to
        let scrolledSection=document.getElementById(link.dataset.scroll);    
        window.scrollTo({
             //specifing the scroll end position
            top:scrolledSection.offsetTop,
            //specifing the smooth behavior
            behavior:"smooth"
        });      
})
}) 

//creating the smooth scroll to to behavior when button is clicked 
let scrollButton=document.querySelector(".scroll-button");
scrollButton.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

let scrolling;
window.addEventListener("scroll",()=>{
    //Hidding the navigation bar while not scrolling
    let navBar=document.querySelector(".navbar__menu");
    navBar.style.cssText="display:block"
    clearTimeout(scrolling);
    scrolling= setTimeout(()=>{
        navBar.style.cssText="display:none"
    },10000);
    //Hidding the "scroll to top " button when the scroll is less than 1000px
    if(window.scrollY>=1000){
        scrollButton.style.cssText="display:block" 
    }else{
        scrollButton.style.cssText="display:none" 
    }
})



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


