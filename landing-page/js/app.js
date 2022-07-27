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

//Define variables
const navigationBar = document.getElementById("navbar__list");
const Sections = Array.from(document.querySelectorAll("section"));
///console.log(navigationBar);

//Build function to link sections with unorderlist <ul>
const ul_list = () => {
  let ele = document.createElement("li");
  let nav = document.getElementById("navbar__list");
  document.querySelectorAll("section").forEach((section) => {
    //edit .navbar__menu li  and add display:flex to make data column wise
    const list = ` 
        <a href="#${section.id}" class="Menu__link" > ${section.dataset.nav}  </a> `;

    ele.innerHTML += list;
    nav.append(ele);
  });
};
ul_list();
/**
 * End Global Variables
 * Start Helper Functions
 *
 */
//GEt Y cordinate for each section and set class active if scroll is in specific range  -500 and 100

const getBoundingTopp = (ele) => ele.getBoundingClientRect().y;
window.onscroll = function () {
  scroll_position = document.body.scrollTop;
  Sections.forEach((section) => {
    //console.log(section.getBoundingClientRect().y + "YYYYY");
    //console.log(getBoundingTop(section))
    console.log(getBoundingTopp(section) + " top ");
    console.log(document.body.getBoundingClientRect().y) 
 
    
    //console.log(rect.top)
    if (
      getBoundingTopp(section) >=  -500 && 
      getBoundingTopp(section) <= 100
    )section.classList.add("your-active-class");
    else section.classList.remove("your-active-class");
  });
};

// Selecting all anchor  and change it scroll behavior to smooth
let anchor = document.getElementsByTagName("a");
for (Ref of anchor) {
  // console.log(document.querySelectorAll('a'))
  Ref.addEventListener("click", function (eve) {
    eve.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
