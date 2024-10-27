

const menuButton = document.querySelector("#menuButton");
const dropdown = document.querySelector("#dropdown");


menuButton.addEventListener("click", function() {
    dropdown.classList.toggle("hide");
});

function handleResize() {
    const width = window.innerWidth;
    // const menu = document.querySelector("nav");

    if (width >= 900) {
        dropdown.classList.remove("hide");
    } else {
        dropdown.classList.add("hide");
    }
}
handleResize();
window.addEventListener("resize", handleResize);

function viewTemplate(pic, alt) {
    return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}" class="modal-img">
    </div>`;
}

function viewHandler(event) {
    const clickedElement = event.target;

    //check if the clicked element is an image
    if (clickedElement.tagName.toLowerCase() === "img") {
        const src = clickedElement.getAttribute("src");

        //change the source to match the full-size image
        const fullSrc = `${src.split("-")[0]}-full.jpeg`;

        //create a viewer modal dynamically
        const viewer = document.createElement("div");
        viewer.classList.add("viewer");
        viewer.innerHTML = viewTemplate(fullSrc, clickedElement.alt);

        //insert the viewer modal into the body
        document.body.appendChild(viewer);   

        // add event listener to the newly created close button
        const newCloseButton = viewer.querySelector(".close-viewer");
        newCloseButton.addEventListener("click", closeViewer);

        //close modal when clicking outside image
        viewer.addEventListener("click", function(event) {
            if (event.target === viewer) {
                closeViewer();
            }
        });
    }
}

//close the modal when clicking the close button
function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer !== null) {
        viewer.remove();
    }
}

// attach the viewhandler function to gallery section
const gallerySection = document.querySelector(".gallery");
gallerySection.addEventListener("click", viewHandler);

const modal = document.getElementById("viewer");
const btn = document.getElementById("open-viewer");

if (btn) {
    btn.onclick = function() {
        modal.style.display = "block";
    };
}

const span = document.getElementsByClassName("close")[0];
if (span) {
    span.onclick = function() {
        modal.style.display = "none";
    };
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};