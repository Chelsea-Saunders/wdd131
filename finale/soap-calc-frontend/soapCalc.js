import { recipes } from './recipes.mjs';
//main.js

// section about imputting recipe in the form:
function getRandomRecipe(recipes) {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    return recipes [randomIndex];
}
//function to getnerate recipe templates
function recipeTemplate(recipe) {
    return `
    <section class="column-two">
        <div class="ingredients">
            <h3>Ingredients</h3>
            <ul>
                <!-- ingredients go here -->
                ${recipe.baseOils.map(oil => `<li>${oil.name}: ${oil.weight}</li>`).join('')}
            </ul>
            <h4> Additives </h4>
            <ul>
            ${recipe.additives && recipe.additives.length > 0
                ? recipe.additives.map(additive => `<li>${additive.name || 'Unknown'}: ${additive.weight || ''}</li>`).join('')
                : '<li>No additives</li>'}
            </ul>
            <h4> Fragrance </h4>
            <ul>
            ${recipe.fragrance && recipe.fragrance.length > 0
                ? recipe.fragrance.map(frag => `<li>${frag.name || 'Unknown'}: ${frag.weight || ''}</li>`).join('')
                : '<li>No fragrance</li>'}
            </ul>

        </div>
        <p class="description">
            ${recipe.description || 'No description available'}
        </p>
    </section>
    `;
}
//function to generate recipe image
function recipeImgTemplate(recipe) {
    return `
    <section class="column-one">
        <img src="${recipe.image?.src || './default-image.jpg'}" alt="${recipe.image?.alt || 'Soap Image'}">
    </section>
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
function makeRecipe(recipe) {
    const everythingContainer = document.querySelector('.everything-container');
    everythingContainer.innerHTML = `
        ${recipeImgTemplate(recipe)}
        ${recipeTemplate(recipe)}
    `;
    // update recipe name seperate so undefined is not displayed
    updateRecipeName(recipe);
}
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
//EVENT LISTENERS
//MAIN recipe page initializeer and listener



//CALCULATE RECIPE page initializeer and listener
document.addEventListener('DOMContentLoaded', () => {
    //add event listener for buttons
    const addOilButton = document.querySelector('#add-oil');
    if (addOilButton) {
        addOilButton.addEventListener('click', () => {
            addEntry('base-oil', 'selected-oils', 'fatsNoils');
        });
    }

    const addAdditiveButton = document.querySelector('#add-additive');
    if (addAdditiveButton) {
        addAdditiveButton.addEventListener('click', () => {
            addEntry('additive', 'selected-additives', 'choose-additives');
        });
    }

    //add event listener for clear field button
    const clearFieldButton = document.querySelector('#clear-field');
    if (clearFieldButton) {
        clearFieldButton.addEventListener('click', () => {
            document.querySelector('#selected-oils').innerHTML = '';
            document.querySelector('#selected-additives').innerHTML = '';
        });
    }

    //add event listener for reset recipe button
    const resetRecipeButton = document.querySelector('#reset-recipe');
    if (resetRecipeButton) {
        resetRecipeButton.addEventListener('click', () => {
            //reset containers and dropdowns
            document.querySelector('#selected-oils').innerHTML = '';
            document.querySelector('#selected-additives').innerHTML = '';
            document.querySelector('#base-oil').value = 'fatsNoils';
            document.querySelector('#additive').value = 'choose-additives';
            document.querySelector('#unit-of-measurement').value = 'unit-of-measurement';
            document.querySelector('#lye-type').value = 'lye-type';
            //clear input fields
            document.querySelector('#super-fat').value = '';
            document.querySelector('#total-oil-weight').value = '';
            document.querySelector('#water').value = '';
            //hide buttons and borders
            document.querySelector('#clear-field').style.display = 'none';
            document.querySelector('#calculate-recipe').style.display = 'none';
            document.querySelector('#selected-oils').style.border = 'none';
            document.querySelector('#selected-additives').style.border = 'none';
        });
    }
});
