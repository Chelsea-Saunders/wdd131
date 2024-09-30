
const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Random image from picsum.");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

//const newSection = document.createElement("section");
//newSection.innerHTML = "<h2>";
//newSection.innerText = "Dom Basics";
//const newParagraph1 = document.createElement("p");
//newParagraph.innerHTML = "This was added through JavaScript";
//document.body.appendChild(newSection, newParagraph);

const newSection1 = document.createElement("section");
newSection1.innerHTML = "<h2>DOM Basics</h2><p>This was added through JavaScript</p>";
document.body.appendChild(newSection1)

const newSection = document.createElement("section");
const newH2 = document.createElement("h2");
newH2.innerText = "Dom Basics";
newSection.appendChild(newH2);
const newP = document.createElement("p");
newP.innerText = "This was added through JavaScript";
newSection.appendChild(newP);

document.body.appendChild(newSection);