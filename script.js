var navLinks = document.getElementById("navLinks");
    
            function showMenu() {
                navLinks.style.right = "0";
            }
    
            function hideMenu() {
                navLinks.style.right = "-200px";
            }

homeAlert=document.querySelector(".HomeAlert");
console.log(homeAlert);

homeAlert.addEventListener("click", () => {
    alert("Already At Home Page")
})