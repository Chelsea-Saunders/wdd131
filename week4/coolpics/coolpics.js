

//Hide menu items by default
const menuButton = document.querySelector("#menuButton");
const dropdown = document.querySelector("#dropdown");

const toggleDropdown = () => {
    dropdown.classList.toggle("hide");
}

// function to check and adjust visiblity based on window size
function handleResize() {
    const screenWidth = window.innerWidth;
    const maxWidth = 900;

    if (screenWidth < maxWidth) {
        dropdown.classList.add("hide");
    } else {
        dropdown.classList.remove("hide");
    }
};
// Add event listener to hide menu items 
menuButton.addEventListener("click", toggleDropdown);

// event listener to check screen size
window.addEventListener("resize", handleResize);

handleResize();

function viewerTemplate(path, alt) {
    return `
        <div class="viewer">
            <div class="image-container">
                <button class="close-viewer">X</button>
                <img src="${path}" alt="${alt}" />
            </div>
        </div>
        `;
    }

//viewHandler function
function viewHandler(event) {
    event.preventDefault();

    console.log("Image Clicked");

    const existingViewer = document.querySelector(".viewer");
    if (existingViewer) {
        existingViewer.remove();
    }
    const path = event.currentTarget.src;
    const alt = event.currentTarget.alt;

    console.log("Path:", path, "Alt:", alt);

    //generate viewer modal
    const viewerHTML = viewerTemplate(path, alt);
    //put viewer HTML into DOM
    document.body.insertAdjacentHTML("beforeend", viewerHTML);
    console.log("Viewer added to DOM");

    const closeButton = document.querySelector(".viewer .close-viewer");
    //add event listener to close button
        if (closeButton) {
            console.log("Close button found");
            closeButton.addEventListener("click", () => {
                console.log("Close button clicked");
                const viewer = document.querySelector(".viewer");
                if (viewer) {
                    viewer.remove();
                    console.log("Viewer removed from DOM");
                }
            });
        } else {
            console.log("close button not found");
        }
    }
const galleryImages = document.querySelectorAll(".gallery img");
galleryImages.forEach(image => {
    console.log("Adding click event listener to image");
    image.addEventListener("click", viewHandler);   
});