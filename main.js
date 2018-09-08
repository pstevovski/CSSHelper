// Add boxes.
const boxContainer = document.querySelector(".box_container");
const addBox = document.querySelector("#addBox");
let boxNumber = 0;
addBox.addEventListener("click", ()=>{
    const newBox = document.createElement("div");
    newBox.classList.add("box");
    boxNumber++;
    newBox.textContent = `BOX ${boxNumber}`;
    boxContainer.appendChild(newBox);
})

// Get all the inputs
const inputs = document.querySelectorAll(`.wrapper input[type="range"]`);
const colorPicker = document.querySelectorAll(`.wrapper input[type=color]`);
let isDown = false;
inputs.forEach(input => input.addEventListener("change", updateCSS));
inputs.forEach(input => input.addEventListener("mousemove", updateCSS));
colorPicker.forEach(color => color.addEventListener("change", updateCSS));
const info = document.querySelectorAll(".info");

function updateCSS(){
    // If theres a data-set SIZING, use that as suffix, otherwise empty.
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    info.forEach(info => {
        if(this.name === info.id) {
            info.innerHTML = this.value + suffix;
        }
    })
}

// Display / hide menues.
const menuTitle = document.querySelectorAll(".menuTitle");
const menu = document.querySelectorAll(".properties");

let isClicked = false;
function toggleMenu(){
    menu.forEach(menu => {
        if(this.id === menu.id) {
            menu.classList.toggle("toggleMenu");
        }
    })
}
menuTitle.forEach(menuTitle => menuTitle.addEventListener("click", toggleMenu))
