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

/*
 * Define Global Variables
*/
const sections = document.querySelectorAll('section');
const navBar = document.querySelector('#navbar__list');
const toTopBtn = document.querySelector('.top');
const header= document.querySelector('.page__header');

/**
 * End Global Variables
*/

// build the nav
const docFragment = document.createDocumentFragment();
for(const section of sections){
    //create listitems and anchors
    const newLi = document.createElement('li');
    const newAnchor = document.createElement('a');
    let sectionId = section.getAttribute('id');
    //set anchor inner text
    newAnchor.innerText = section.getAttribute("data-nav");
    //set href attribute to anchor
    newAnchor.setAttribute("href",`#${sectionId}`);
    //adds click event to every anchor to scroll to related section
    newAnchor.addEventListener('click',(e)=>{
        e.preventDefault();
        section.scrollIntoView({behavior:"smooth"});
    });
   
    //adds anchor to list item
    newLi.appendChild(newAnchor);
    //adds list item to gragment
    docFragment.appendChild(newLi);
}
// Build menu 
navBar.appendChild(docFragment);

let isScrolling;
 window.onscroll = ()=>{
     // Add class 'active' to anchor and related section when near top of viewport
     for(const section of sections){
        let sectionId = section.getAttribute('id');
        if(section.getBoundingClientRect().top < window.innerHeight /2 && section.getBoundingClientRect().top>-100){
            section.classList.add('your-active-class');
            document.querySelector(`[href="#${sectionId}"]`).classList.add('active');    
        }else{
            section.classList.remove('your-active-class');
            document.querySelector(`[href="#${sectionId}"]`).classList.remove('active');  
        }
     }
     //display top button 
     if(this.scrollY > 500)
        {
            toTopBtn.style.display='block';
            
        }
            else
            {
                toTopBtn.style.display='none';
                
            }
     //hide navBar while not scrolling
    header.style.display="block";
    clearTimeout(isScrolling);
    isScrolling = setTimeout(()=>{
    header.style.display="none";
    },3000);
     
    }
     
//add click event to top button
toTopBtn.onclick=()=>{
   window.scrollTo({top:0,behavior:"smooth"});
}



