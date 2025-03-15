var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}

function hideMenu() {
  navLinks.style.right = "-200px";
}

const homeAlert = document.querySelector(".HomeAlert");
const aboutAlert = document.querySelector(".aboutAlert");
const courseAlert = document.querySelector(".courseAlert");
const blogAlert = document.querySelector(".blogAlert");
const contactAlert = document.querySelector(".contactAlert");
if (homeAlert) {
  homeAlert.addEventListener("click", () => {
    alert("Already At Home Page");
  });
}

if (aboutAlert) {
  aboutAlert.addEventListener("click", () => {
    alert("Already At About Page");
  });
}

if (courseAlert) {
    courseAlert.addEventListener("click", () => {
    alert("Already At Course Page");
  });
}

if (blogAlert) {
    blogAlert.addEventListener("click", () => {
    alert("Already At Blog Page");
  });
}

if (contactAlert) {
  contactAlert.addEventListener("click", () => {
    alert("Already At Contact Page");
  });
}