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

// Informations menu
const about = document.querySelectorAll(".about");
const modal = document.querySelector(".modal");

let isClicked = false;
function toggleMenu(){
    menu.forEach(menu => {
        if(this.id === menu.id) {
            menu.classList.toggle("toggleMenu");
            this.classList.toggle("activeMenu");
        }
    })
}

function showInfo(){
    modal.classList.add("modalActive");
    if(this.id === "boxBasic") {
            modal.innerHTML = 
            `<h3>BASIC PROPERTIES</h3>
            <p>The width property in CSS specifies the width of the element's content1 area. This "content" area is the portion inside the padding, border, and margin of an element <a href=http://css-tricks.com/the-css-box-model/" target="_blank">(the box model).</a></p>
            <br>
            <p>The height property in CSS defines specifies the content height of boxes and accepts any of the length values.

            The “content” area is defined as the padding and border in addition to the height/width or size the content itself takes up.</p>
            
            <div class="closeBtn"><i class="material-icons">close</i></div>`;
    }
    // Opacity
    if(this.id === "opacity") {
        modal.innerHTML = 
        `<h3>OPACITY</h3>
        <p>The opacity property in CSS specifies how transparent an element is.</p>
        <a href="https://css-tricks.com/almanac/properties/o/opacity/" target="_blank" alt="CSS-tricks">https://css-tricks.com/almanac/properties/o/opacity/</a>
        
        <div class="closeBtn"><i class="material-icons">close</i></div>`;
    }
    // Padding
    if(this.id === "padding") {
        modal.innerHTML =
        `<h3>PADDINGS</h3>
        <p>The padding property in CSS defines the innermost portion of the box model, creating space around an element's content, inside of any defined margins and/or borders.

        Padding values are set using lengths or percentages, and cannot accept negative values. The initial, or default, value for all padding properties is 0.</p>
        <a href="https://css-tricks.com/almanac/properties/p/padding/" target="_blank" alt="CSS-tricks">https://css-tricks.com/almanac/properties/p/padding/</a>
        
        <div class="closeBtn"><i class="material-icons">close</i></div>`;
    }
    // MARGINS
    if(this.id === "margins") {
        modal.innerHTML =
        `<h3>MARGINS</h3>
        <p>The margin property defines the outermost portion of the box model, creating space around an element, outside of any defined borders.

        Margins are set using lengths, percentages, or the keyword auto and can have negative values.</p>
        <a href="https://css-tricks.com/almanac/properties/m/margin/" target="_blank" alt="CSS-tricks">https://css-tricks.com/almanac/properties/m/margin/</a>
        
        <div class="closeBtn"><i class="material-icons">close</i></div>`;
    }
    // TRANSFORM
    if(this.id === "transform") {
        modal.innerHTML =
        `<h3>TRANSFORM</h3>
        <p>The transform property allows you to visually manipulate an element by skewing, rotating, translating, or scaling.</p>
        <a href="https://css-tricks.com/almanac/properties/t/transform/" target="_blank" alt="CSS-tricks">https://css-tricks.com/almanac/properties/t/transform/</a>
        
        <div class="closeBtn"><i class="material-icons">close</i></div>`;
    }
    // BORDER
    if(this.id === "borders") {
        modal.innerHTML = 
        `<h3>BORDERS</h3>
        <p>The border property is a shorthand syntax in CSS that accepts multiple values for drawing a line around the element it is applied to.</p>
        <a href="https://css-tricks.com/almanac/properties/b/border/" target="_blank" alt="CSS-tricks">https://css-tricks.com/almanac/properties/b/border/</a>
        
        <div class="closeBtn"><i class="material-icons">close</i></div>`;
    }
    // SHADOWS
    if(this.id === "shadows") {
        modal.innerHTML =
        `<h3>SHADOWS</h3>
        <p>Used in casting shadows off block-level elements (like divs).</p>
        <a href="https://css-tricks.com/snippets/css/css-box-shadow/" target="_blank" alt="CSS-tricks">https://css-tricks.com/snippets/css/css-box-shadow/</a>
        
        <div class="closeBtn"><i class="material-icons">close</i></div>`;
    }
    if(this.id === "gradient") {
        modal.innerHTML =
        `<h3>GRADIENT</h3>
        <p>Just as you can declare the background of an element to be a solid color in CSS, you can also declare that background to be a gradient. Using gradients declared in CSS, rather using an actual image file, is better for control and performance.

        Gradients are typically one color that fades into another, but in CSS you can control every aspect of how that happens, from the direction to the colors (as many as you want) to where those color changes happen.</p>
        <a href="https://css-tricks.com/css3-gradients/" target="_blank" alt="CSS-tricks">https://css-tricks.com/css3-gradients/</a>
        
        <div class="closeBtn"><i class="material-icons">close</i></div>`;
    }

    // Close the modal.
    document.querySelector(".closeBtn").addEventListener("click", ()=>{
        modal.classList.remove("modalActive");
    })
}

menuTitle.forEach(menuTitle => menuTitle.addEventListener("click", toggleMenu))
about.forEach(about => about.addEventListener("click", showInfo));
