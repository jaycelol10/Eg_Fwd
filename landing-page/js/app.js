
//Define variables
// save navbar__list and section in variables to use them later 

const navigationBar = document.getElementById("navbar__list")
const Sections = Array.from(document.querySelectorAll("section"))

//Build function to link sections with unorderlist <ul>

const ul_list = () => {
  let ele = document.createElement("li")
  let nav = document.getElementById("navbar__list")
  document.querySelectorAll("section").forEach((section) => {

    //edit .navbar__menu li in css file and add display:flex to make data column wise

    const list = `<a href="#${section.id}" class="Menu__link" > ${section.dataset.nav}  </a>`
    ele.innerHTML += list
    nav.append(ele)
  })
}
ul_list()

//GEt Y cordinate for each section and set class active if scroll is in specific range  -500 and 100

const getBoundingTopp = (ele) => ele.getBoundingClientRect().y;
window.onscroll = function () {
  
  Sections.forEach((section)=> {
    if (
      getBoundingTopp(section) >=  -500 &&
      getBoundingTopp(section) <= 100
    )section.classList.add("your-active-class")
    else section.classList.remove("your-active-class")
  })
}

// Selecting all anchor  and change it scroll behavior to smooth

let anchor = document.getElementsByTagName("a")
for (Ref of anchor) {

  Ref.addEventListener("click", function (eve) {
    eve.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
}
