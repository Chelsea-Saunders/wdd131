
//replace with code to select dropdown element our of the HTML (hint: document.querySelector)
const themeSelector = document.querySelector("#themeSelector");
    //check to see what the current value of our select is
    //The current value is conveniently found in themeSelector.value!
function changeTheme() {
    const currentTheme = themeSelector.value;
    const body = document.body;
    const logo = document.querySelector("#byui-logo");
    //if the value is dark then:
    //add the dark class to the body
    //change the source of the logo img to point to the white logo.
    if (selectedValue === "dark") {
        body.classList.add("dark"); //adds dark class to body
        logo.src = "images/byui-logo_white.png"; // changes logo to white lettering
    }
    //otherwise remove the dark class make sure the logo src is the blue logo.
    else {
        body.classList.remove("dark"); //reverts from dark mode
        logo.src = "images/byui-logo_blue.webp"; // reverts to blue logo
    }
} 
//add an event listener to the themeSelector element here. use the changeTHeme function as the event handler function.
themeSelector.addEventListener("change", changeTheme);
