const sapValues = {
    "sweet-almond": { NaOH: 0.136, KOH: 0.191 },
    "aloe-butter": { NaOH: 0.178, KOH: 0.25 },
    "apricot-kernel-oil": { NaOH: 0.137, KOH: 0.194 },
    "argan-oil": { NaOH: 0.137, KOH: 0.194 },
    "avocado-oil": { NaOH: 0.133, KOH: 0.187 },
    "babassu-oil": { NaOH: 0.175, KOH: 0.246 },
    "beef-tallow": { NaOH: 0.141, KOH: 0.198 },
    "bison-tallow": { NaOH: 0.138, KOH: 0.194 },
    "butter": { NaOH: 0.129, KOH: 0.183 },
    "canola-oil": { NaOH: 0.131, KOH: 0.185 },
    "castor-oil": { NaOH: 0.128, KOH: 0.18 },
    "cocoa-butter": { NaOH: 0.137, KOH: 0.194 },
    "coconut-oil": { NaOH: 0.178, KOH: 0.25 },
    "corn-oil": { NaOH: 0.136, KOH: 0.191 },
    "cottonseed-oil": { NaOH: 0.138, KOH: 0.194 },
    "duck-fat": { NaOH: 0.136, KOH: 0.191 },
    "flaxseed-oil": { NaOH: 0.135, KOH: 0.19 },
    "goose-fat": { NaOH: 0.135, KOH: 0.19 },
    "grapeseed-oil": { NaOH: 0.135, KOH: 0.19 },
    "hazelnut-oil": { NaOH: 0.136, KOH: 0.191 },
    "hemp-seed-oil": { NaOH: 0.137, KOH: 0.194 },
    "jojoba-oil": { NaOH: 0.069, KOH: 0.098 },
    "kokum-butter": { NaOH: 0.137, KOH: 0.194 },
    "lard": { NaOH: 0.138, KOH: 0.194 },
    "macadamia-oil": { NaOH: 0.139, KOH: 0.197 },
    "mango-butter": { NaOH: 0.135, KOH: 0.19 },
    "neem-oil": { NaOH: 0.138, KOH: 0.194 },
    "olive-oil": { NaOH: 0.134, KOH: 0.19 },
    "palm-kernel-oil": { NaOH: 0.172, KOH: 0.242 },
    "palm-oil": { NaOH: 0.141, KOH: 0.198 },
    "peach-kernel-oil": { NaOH: 0.137, KOH: 0.194 },
    "peanut-oil": { NaOH: 0.136, KOH: 0.191 },
    "pumpkin-seed-oil": { NaOH: 0.135, KOH: 0.19 },
    "rice-bran-oil": { NaOH: 0.128, KOH: 0.18 },
    "safflower-oil": { NaOH: 0.135, KOH: 0.19 },
    "sesame-oil": { NaOH: 0.133, KOH: 0.187 },
    "shea-butter": { NaOH: 0.128, KOH: 0.18 },
    "soybean-oil": { NaOH: 0.135, KOH: 0.19 },
    "stearic-acid": { NaOH: 0.141, KOH: 0.198 },
    "sunflower-oil": { NaOH: 0.135, KOH: 0.19 },
    "walnut-oil": { NaOH: 0.135, KOH: 0.19 },
    "wheat-germ-oil": { NaOH: 0.129, KOH: 0.183 }
};

//function to add entry to selected oils or additives
function addEntry(selectId, containerId, defaultOptionValue) {
    //get selected value
    const selectElement = document.getElementById(selectId);
    const containerElement = document.getElementById(containerId);

    if (!selectElement || !containerElement) {
        console.error('Element not found');
        return;
    }
    const value = selectElement.value;

    //skip if default option is selected
    if (value === defaultOptionValue) {
        console.log('Default option selected');
        return;
    }
    if ([...containerElement.querySelectorAll('span')].some(span => span.textContent.trim() === value)) {
        console.log(`${value} already added`);

        return;
    }

    //create new entry
    const entry = document.createElement('div');
    entry.classList.add(`${selectId}-entry`); //dynamic class based on section
    entry.innerHTML = `
        <span>${value}</span>
        <input type="number" placeholder="Enter %" class="percentage-input">
        <button type="button" class="remove-entry">Remove</button>`;

    //append entry to corrisponding container
    containerElement.appendChild(entry);
    showButtonsAndBorders();
    console.log(`Added ${value}`);
}

//function to show buttons and borders
function showButtonsAndBorders() {
    console.log('showButtonsAndBorders triggered');
    //show buttons
    document.getElementById('clear-field').style.display = 'inline-block';
    document.getElementById('calculate-recipe').style.display = 'inline-block';

    //add borders 
    const oilsContainer = document.querySelector('#selected-oils');
    const additivesContainer = document.querySelector('#selected-additives');

    oilsContainer.style.border = '1px solid #ccc';
    additivesContainer.style.border = '1px solid #ccc';

    //make container vidible
    oilsContainer.style.display = 'block';
    additivesContainer.style.display = 'block';
}

function getFormValues() {
    const totalOilWeight = parseFloat(document.getElementById('total-oil-weight').value);
    const superFat = parseFloat(document.getElementById('super-fat').value) || 0;
    const unit = document.getElementById('unit-of-measurement').value;

    if (![ 'oz', 'g', 'lb'].includes(unit)) {
        console.error('Invalid unit selected');
        alert('Please select a valid unit of measurement (oz, g, lb).');
        return null;
    }

    const oils = [...document.querySelectorAll('#selected-oils .base-oil-entry')].map(entry => {
        const oilName = entry.querySelector('span').textContent.trim();
        const percentage = parseFloat(entry.querySelector('.percentage-input').value) || 0;
        return { oilName, percentage };
    });

    console.log("form values:", { totalOilWeight, superFat, unit, oils });
    return { totalOilWeight, superFat, unit, oils };
}

function calculateRecipe({ totalOilWeight, superFat, unit, oils }) {
    console.log('Calculating recipe with values:', { totalOilWeight, superFat, unit, oils });
    if (oils.length === 0) {
        console.error('No oils selected');
        alert('Please select at least one oil');
        return;
    }

    const totalPercentage = oils.reduce((sum, oil) => sum + oil.percentage, 0);
    if (totalPercentage !== 100) {
        console.error("Percentages must add up to 100");
        alert("The total percentage of oils must equal 100%.");
        return;
    }

    const recipe = [];
    let totalLye = 0;

    oils.forEach(oil => {
        const sap = sapValues[oil.oilName]?.NaOH || 0;
        const oilWeight = (oil.percentage / 100) * totalOilWeight;
        const lye = oilWeight * sap;

        totalLye += lye;

        recipe.push({
            oilName: oil.oilName,
            weight: oilWeight.toFixed(2),
            lye: lye.toFixed(2),
        });
    });

    totalLye = totalLye - (totalLye * (superFat / 100));
    const water = (totalOilWeight * 0.38).toFixed(2);

    console.log('Calculated recipe:', { recipe, totalLye, water });
    return { recipe, totalLye, water };
}

function displayRecipe({ recipe, totalLye, water }) {

    document.getElementById('recipe-output').style.display = 'block';


    console.log('Displaying recipe:', { recipe, totalLye, water });
    const recipeOutput = document.getElementById('recipe-output');
    const recipeList = document.getElementById('recipe-list');

    console.log('Computed style:', window.getComputedStyle(recipeList).visibility);
    console.log('Text color:', window.getComputedStyle(recipeList).color);
    console.log('Background color:', window.getComputedStyle(recipeList).backgroundColor);

    if (!recipeOutput || !recipeList) {
        console.error('Element not found');
        return;
    }

    console.log('making #recipe-output visible');
    recipeOutput.style.display = 'block';

    recipeList.innerHTML = '';

    recipe.forEach(item => {
    recipeList.innerHTML += `
        <li>${item.oilName}: ${item.weight} (${item.lye} lye)</li>`;
    });

    recipeList.innerHTML += `<li><strong>Total Lye:</strong> ${totalLye} oz</li>`;
    recipeList.innerHTML += `<li><strong>Water:</strong> ${water} oz</li>`;

    console.log('Updating recipe-list with:', recipeList.innerHTML);

}

//DOM:

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('add-oil').addEventListener('click', () => {
        addEntry('base-oil', 'selected-oils', 'fatsNoils');
    });


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
            document.querySelector('#selected-oils').innerHTML = '';
            document.querySelector('#selected-additives').innerHTML = '';
            document.querySelector('#base-oil').value = 'fatsNoils';
            document.querySelector('#additive').value = 'choose-additives';
            document.querySelector('#unit-of-measurement').value = 'unit-of-measurement';
            document.querySelector('#lye-type').value = 'lye-type';
            document.querySelector('#super-fat').value = '';
            document.querySelector('#total-oil-weight').value = '';
            document.querySelector('#water').value = '';

            document.querySelector('#clear-field').style.display = 'none';
            document.querySelector('#calculate-recipe').style.display = 'none';
            document.querySelector('#selected-oils').style.border = 'none';
            document.querySelector('#selected-additives').style.border = 'none';
        });
    }

    const calculateButton = document.getElementById('calculate-recipe');
    if (calculateButton) {
        calculateButton.addEventListener('click', () => {
            const formValues = getFormValues();
            if (formValues) {
                const calculatedRecipe = calculateRecipe(formValues);
                if (calculatedRecipe) {
                    displayRecipe(calculatedRecipe);
                }
            }
        });
    }
});