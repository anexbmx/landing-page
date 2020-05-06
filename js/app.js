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
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll("section");
const navbar = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * @description Determine if an element is in the visible viewport
 * @param {HTMLElement} element 
 * @returns {boolean}
 */


function isInViewport(element) {
    let bounding = element.getBoundingClientRect();
    return (
      (bounding.top  <= 100 && bounding.bottom  >= 100) 
    );
}





/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function generateNav() {
    let documentFragment = document.createDocumentFragment();

    sections.forEach((section) => {
        // TODO: create li element
        let liElement = document.createElement("li");
        liElement.classList.add('nav-item');

        // TODO: create Anchor element
        let anchorElement = document.createElement("a");

        // TODO: add 'data-anchor' attribute, used when want to to scroll to the right section
        anchorElement.setAttribute("data-anchor", section.id);
        anchorElement.textContent = section.getAttribute("data-nav");

        liElement.appendChild(anchorElement);
        documentFragment.appendChild(liElement);
    })
    navbar.appendChild(documentFragment);
}

// Add class 'active' to section when near top of viewport
function setActiveSection() {

    sections.forEach(section => {
        if (isInViewport(section) && !section.classList.contains('your-active-class')) {
            section.classList.add('your-active-class');
            this.console.log(section.id + ' is in the viewport');
        } else if (!isInViewport(section) && section.classList.contains('your-active-class')) {
            section.classList.remove('your-active-class');
            this.console.log(section.id + ' is in not the viewport');
        }
    });
}

// Scroll to anchor ID using scrollTO event
/**
 * @description scroll to the appropriate section of the page
 * @param {Event} event 
 */
function scrollToSection(event) {
    let target = event.target;
    let sectionId = target.getAttribute('data-anchor');
    if (target.nodeName == "A") {
        let section = document.getElementById(sectionId);
        window.scrollTo({ 
            top: section.getBoundingClientRect().top + window.scrollY - 60,
            behavior: 'smooth' 
        });
    }
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 
generateNav();

// Scroll to section on link click
navbar.addEventListener("click", scrollToSection);

// Set sections as active
window.addEventListener('scroll', setActiveSection);

