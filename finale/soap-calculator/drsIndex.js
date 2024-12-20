import { recipes } from './recipes.mjs';
//main.js

const searchBar = document.querySelector('.search-bar');
const searchIcon = document.querySelector('.search-icon');

function toggleSearchBar() {
    //make search bar visible
    if (searchBar.style.display === 'none' || searchBar.style.display === '') {
        searchBar.style.display = 'block';
        searchBar.focus();
    } else {
        searchBar.style.display = 'none';
    }
}
// function to handle search on enter key press
function handleSearchOnEnter(event) {
    if (event.key === 'Enter') {
        console.log('Enter key pressed');
        handleSearch();
    }
}
//search functionality 
function filterRecipe(query) {
    const lowerCaseQuery = query.toLowerCase();

    return recipes.filter(recipe => {
        //searc by recipe name
        const searchFields = [
            recipe.recipeName,
            ...recipe.baseOils.map(oil => oil?.name),
            ...recipe.additives.map(additive => additive?.name),
            ...recipe.description
        ];
        return searchFields.some(field => field.toLowerCase().includes(lowerCaseQuery));
    });
}
function handleSearch() {
    const query = searchBar.value.trim();
    const filteredRecipes = filterRecipe(query);

    const everythingContainer = document.querySelector('.everything-container');
    //clear container
    everythingContainer.innerHTML = '';

    if (filteredRecipes.length > 0) {
        //append each recipe
        filteredRecipes.forEach(recipe => {
            everythingContainer.innerHTML += `
                <div class="recipe">
                    <section class="column-one">
                        ${recipeImgTemplate(recipe)}
                    </section>
                    <section class="column-two">
                        ${recipeTemplate(recipe, query)}
                    </section>
                </div>
            `;
        });
    } else {
        everythingContainer.innerHTML = `<p>No recipe found for ${query}</p>`;
    }
}
// section about imputting recipe in the form:
// function getRandomRecipe(recipes) {
//     const randomIndex = Math.floor(Math.random() * recipes.length);
//     return recipes [randomIndex];
// }
function getRandomRecipe(recipes) {
    if (!recipes || recipes.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * recipes.length);
    return recipes [randomIndex];
}

function highlightMatch(text, query) {
    if (!text) return ''; // return empty string if text is false/flasy
    const regex = new RegExp(`(${query})`, 'gi'); // case-insensitive match
    return text.replace(regex, '<mark>$1</mark>'); // wrap march in <mark> 
}
//function to getnerate recipe templates
function recipeTemplate(recipe, query) {
    return `
    <section class="column-two">
        <div class="ingredients">
            <h3>Ingredients</h3>
            <h4>Oils</h4>
            <ul>
                <!-- ingredients go here -->
                ${recipe.baseOils
                    .map(oil => `<li>${highlightMatch(oil.name || '', query)}: ${oil.weight || ''}</li>`)
                    .join('')}
            </ul>
            <h4> Lye </h4>
            <p>${highlightMatch(recipe.lyeType || 'Unknown', query)}: ${recipe.lyeWeight || 'Unknown Weight'}<p>
            <h4> Additives </h4>
            <ul>
            ${recipe.additives && recipe.additives.length > 0
                ? recipe.additives.map(additive => 
                    `<li>${highlightMatch(additive.name || 'Unknown', query)}: ${additive.weight || ''}</li>`
                ).join('')
                : '<li>No additives</li>'}
            </ul>
            <h4> Fragrance </h4>
            <ul>
            ${recipe.fragrance && recipe.fragrance.length > 0
                ? recipe.fragrance.map(frag => 
                    `<li>${highlightMatch(frag.name || 'Unknown', query)}: ${frag.weight || ''}</li>`
                  ).join('')
                : '<li>No fragrance</li>'}
            </ul>

        </div>
        <h4>Description</h4>
        <p class="description">
            ${highlightMatch(recipe.description || 'No description available', query)}
        </p>
    </section>
    `;
}
//function to generate recipe image
function recipeImgTemplate(recipe) {
    return `
        <img class="recipe-img" src="${recipe.image?.src || './default-image.jpg'}" alt="${recipe.image?.ale || 'Soap Image'}">
    `;
}
//function to generate recipe name
function updateRecipeName(recipe) {
    const recipeNameElement = document.querySelector('.message-title .recipe-name');
    if (recipeNameElement) {
        recipeNameElement.textContent = recipe.recipeName;
    } else {
        console.log('Recipe name not found');
    }
}
//function to display recipe
function makeRecipe(recipe, query = '') {
    const everythingContainer = document.querySelector('.everything-container');
    
    //clear container before ading recipes
    everythingContainer.innerHTML = '';

    //append each recipe to container
    everythingContainer.innerHTML += `
        <section class="column-one">
            ${recipeImgTemplate(recipe)}
        </section>
        <section class="column-two">
            ${recipeTemplate(recipe, query)}
        </section>
    `;
    // update recipe name seperate so undefined is not displayed
    updateRecipeName(recipe);
}

//Soapcalc JS

//function calculateRecipe()

//main initialization
document.addEventListener('DOMContentLoaded', () => {
    const randomRecipe = getRandomRecipe(recipes);
    makeRecipe(randomRecipe);
})

//soapCalc.js

//function to add entry to selected oils or additives
function addEntry(selectId, containerId, defaultOptionValue) {
    //get selected value
    const value = document.getElementById(selectId).value;

    //skip if default option is selected
    if (value === defaultOptionValue) return;

    //create new entry
    const entry = document.createElement('div');
    entry.classList.add(`${selectId}-entry`); //dynamic class based on section
    entry.innerHTML = `<span>${value}</span><input type="number" placeholder="Enter %" class="percentage-input">`;

    //append entry to corrisponding container
    document.getElementById(containerId).appendChild(entry);
    showButtonsAndBorders();
}
//function to show buttons and borders
function showButtonsAndBorders() {
    console.log('showButtonsAndBorders triggered');
    //show buttons
    document.getElementById('clear-field').style.display = 'inline-block';
    document.getElementById('calculate-recipe').style.display = 'inline-block';

    //add borders 
    const oilsContainer = document.getElementById('selected-oils');
    const additivesContainer = document.getElementById('selected-additives');

    oilsContainer.style.border = '1px solid #ccc';
    additivesContainer.style.border = '1px solid #ccc';

    //make container vidible
    oilsContainer.style.display = 'block';
    additivesContainer.style.display = 'block';
}

//soap calc page



//EVENT LISTENERS
//MAIN recipe page initializeer and listener



//CALCULATE RECIPE page initializeer and listener
document.addEventListener('DOMContentLoaded', () => {
    
    //event listener for Search
    const searchBar = document.querySelector('.search-bar');
    //listen for input changes in search bar
    searchBar.addEventListener('keydown', handleSearchOnEnter);
    //other listener
    searchIcon.addEventListener('click', toggleSearchBar);

    //make searchbar visible on icon click
    searchIcon.addEventListener('click', toggleSearchBar);
    //perform search on enter key
    searchBar.addEventListener('keypress', handleSearchOnEnter);

});
