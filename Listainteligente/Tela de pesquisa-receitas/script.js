
const menuBtn = document.getElementById("menu-btn");
const optionsMenu = document.getElementById("options-menu");


menuBtn.addEventListener("click", () => {
   
    if (optionsMenu.style.display === "flex") {
        optionsMenu.style.display = "none"; 
    } else {
        optionsMenu.style.display = "flex"; 
    }
});


document.addEventListener("click", (event) => {
    if (!optionsMenu.contains(event.target) && event.target !== menuBtn) {
        optionsMenu.style.display = "none";
    }
});
