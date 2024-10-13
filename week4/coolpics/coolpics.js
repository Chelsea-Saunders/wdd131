

const menuButton = document.querySelector("#menuButton");
const dropdown = document.querySelector("#dropdown");


menuButton.addEventListener("click", function() {
    dropdown.classList.toggle("hide");
});

function handleResize() {
    const width = window.innerWidth;

    const menu = document.querySelector("menu");

    if (width > 1000) {
        menu.classList.remove("hide");
    } else {
        menu.classList.add("hide");
    }
}
handleResize();
window.addEventListener("resize", handleResize);

function viewTemplate(pic, alt) {
    return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt={alt}>
    </div>`;
}
const closeButton = document.querySelector(".close-viewer");

closeButton.addEventListener("click", closeViewer);

// //get modal element
// const modal = document.getElementById("viewer");

// //get button that opent the modal
// const btn = document.getElementById("open-viewer");

// //get the <span> element that closes the modal
// const span = document.getElementsByClassName("close")[0];

// //when the user clicks the button, open the modal
// btn.onclick = function() {
//     modal.style.diaplay = "block";
// }
// //when the user clicks on the <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }
 
//when the user clicks anywhere outside the modal, closes it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function viewTemplate(pic, alt) {
    return `div class="viewer">
        <button class = "close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
    const clickedElement = event.target;

    if (clickedElement.tagName.toLowerCase() === "img") {
        const src = clickedElement.getAttribute("src");
        const fullSrc = `${src.split("-")[0]}-fullSrc.jpt`;

        const viewer = document.createElement("div");
        viewer.classList.add("viewer");
        viewer.innerHTML = viewTemplate(fullSrc, clickedElement.alt);

        document.body.insertAdjacentHTML("afterbegin", viewer.outterHMTL);   

        const newCloseButton = viewer.querySelector(".close-viewer");
        newCloseButton.addEventListener("click", closeViewer);
    }
}

const gallerySection = document.querySelector(".gallery");
gallerySection.addEventListener("click", viewHandler);

function closeViewer() {
    const viewer = document.querySelector(".close-viewer");
    if (viewer !== null) {
        viewer.parentNode.remove();
    }
}
const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", viewHandler);