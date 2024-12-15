
//DOM:

document.addEventListener('DOMContentLoaded', () => {
    const addAdditiveButton = document.querySelector('#add-additive');
    const resetRecipeButton = document.querySelector('#reset-recipe');
    const calculateButton = document.querySelector('#calculate-recipe');
    const viewRecipeButton = document.querySelector('#view-recipe');
    const staticRecipeView = document.querySelector('#static-recipe-content');
    const staticRecipeContent = document.querySelector('#static-recipe-content');
    const closeRecipeButton = document.querySelector('#close-static-recipe');
    const additiveDropdown = document.querySelector('#additive');
    const selectedAdditivesContainer = document.querySelector('#selected-additives');
    const clearFieldButton = document.querySelector('#clear-field');

    if (clearFieldButton) {
        clearFieldButton.addEventListener('clicl', () => {
            const oilsContainer = document.querySelector('#selected-oils');
            const additivesContainer = document.querySelector('#selected-additives');

            if (oilsContainer) oilsContainer.innerHTML = '';
            if (additivesContainer) additivesContainer.innerHTML = '';
        });
    } else {
        console.error('Clear Field button not found');
    }


    document.getElementById('add-oil').addEventListener('click', () => {
        addEntry('base-oil', 'selected-oils', 'fatsNoils');
    });

    // Add additive to list
    if (addAdditiveButton) {
        addAdditiveButton.addEventListener('click', () => {
            addEntry('additive', 'selected-additives', 'choose-additives');
        });
    }

    if (additiveDropdown) {
        additiveDropdown.addEventListener('change', () => {
            const selectedValue = additiveDropdown.value;

            if (selectedValue === 'no') {
                //disable enter input
                addAdditiveButton.disabled = true;
                selectedAdditivesContainer.innerHTML = '';
                selectedAdditivesContainer.style.border = 'none';
            } else {
                // Enable the "Enter Input" button
                addAdditiveButton.disabled = false;
                selectedAdditivesContainer.style.border = '1px solid #ccc';
            }
        });
    }

    if (clearFieldButton) {
        clearFieldButton.addEventListener('click', () => {
            document.querySelector('#selected-oils').innerHTML = '';
            document.querySelector('#selected-additives').innerHTML = '';
        });
    }

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
            //hide buttons after reset
            document.querySelector('#clear-field').style.display = 'none';
            document.querySelector('#calculate-recipe').style.display = 'none';
            document.querySelector('#selected-oils').style.border = 'none';
            document.querySelector('#selected-additives').style.border = 'none';

            if (staticRecipeView) staticRecipeView.style.display = 'none';
        });
    }
    
    if (staticRecipeView) {
        staticRecipeView.style.display = 'none';
    }

    //calculate recipe button
    if (calculateButton) {
        calculateButton.addEventListener('click', (event) => {
            event.preventDefault();
            const formValues = getFormValues();
            if (formValues) {
                const calculatedRecipe = calculateRecipe(formValues);
                if (calculatedRecipe) {
                    displayStaticRecipe(calculatedRecipe);
                }
            }
        });
    }
    if (viewRecipeButton) {
        viewRecipeButton.addEventListener('click', (event) => {
            event.preventDefault();
    
            // Example hard-coded recipe
            const recipeHTML = `
                <ul>
                    <li>Oil A: 50% (5 oz)</li>
                    <li>Oil B: 50% (5 oz)</li>
                    <li>Total Lye: 1.5 oz</li>
                    <li>Water: 6 oz</li>
                </ul>
            `;
    
            staticRecipeContent.innerHTML = recipeHTML; // Insert hard-coded recipe
            staticRecipeView.style.display = 'block';   // Show the recipe view
        });
    }
    
    
    if (closeRecipeButton) {
        closeRecipeButton.addEventListener("click", () => {
            staticRecipeView.style.display = "none";
        });
    }

    // if (closeRecipeButton) {
    //     closeRecipeButton.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         console.log('Close Recipe button clicked');
    //         staticRecipeContent.classList.remove('active');
    //         staticRecipeContent.style.display = 'none';
    //     });
    // }
}); 

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

// Function to add entry to selected oils or additives
function addEntry(selectId, containerId, defaultOptionValue) {
    // Get the selected value and corresponding container
    const selectElement = document.getElementById(selectId);
    const containerElement = document.getElementById(containerId);

    if (!selectElement || !containerElement) {
        console.error('Element not found');
        return;
    }

    const value = selectElement.value;

    // Skip if the default option is selected
    if (value === defaultOptionValue) {
        console.log('Default option selected');
        return;
    }

    // Prevent duplicate entries
    if ([...containerElement.querySelectorAll('span')].some(span => span.textContent.trim() === value)) {
        console.log(`${value} already added`);
        return;
    }

    // Create new entry without the remove button
    const entry = document.createElement('div');
    entry.classList.add(`${selectId}-entry`); // Dynamic class based on section
    entry.innerHTML = `
        <span>${value}</span>
        <input type="number" placeholder="Enter %" class="percentage-input">
    `;

    // Append the entry to the corresponding container
    containerElement.appendChild(entry);

    // Show buttons and borders after adding an entry
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

    if (oilsContainer.innerHTML.trim() !== '') {
        oilsContainer.style.border = '1px solid #ccc';
        oilsContainer.style.display = 'block';
    }

    if (additivesContainer.innerHTML.trim() !== '') {
        additivesContainer.style.border = '1px solid #ccc';
        additivesContainer.style.display = 'block';
    }
}

function getFormValues() {
    const totalOilWeight = parseFloat(document.getElementById('total-oil-weight').value);
    const superFat = parseFloat(document.getElementById('super-fat').value) || 0;
    const unit = document.getElementById('unit-of-measurement').value;

    if (!totalOilWeight || !unit) {
        console.error('Invalid unit selected');
        alert('Must complete all required fields.');
        return null;
    }

    const oils = [...document.querySelectorAll('#selected-oils div')].map(entry => {
        const oilName = entry.querySelector('span').textContent.trim();
        const percentage = parseFloat(entry.querySelector('.percentage-input').value) || 0;
        return { oilName, percentage };
    });

    const totalPercentage = oils.reduce((sum, oil) => sum + oil.percentage, 0);
    if (totalPercentage !== 100) {
        alert('Total % must equal 100. (remaining: ' + (100 - totalPercentage) + '%)');
        return null;
    }
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

    // Conversion factor for units
    let conversionFactor = 1; // Default: oz
    if (unit === "g") {
        conversionFactor = 0.035274; // grams to oz
    } else if (unit === "lbs") {
        conversionFactor = 16; // pounds to oz
    }

    const totalOilWeightInOz = totalOilWeight * conversionFactor; // Convert to oz

    const recipe = [];
    let totalLye = 0;

    // Process each oil
    oils.forEach(oil => {
        const sap = sapValues[oil.oilName]?.NaOH || 0;
        const oilWeight = (oil.percentage / 100) * totalOilWeightInOz;
        const lye = oilWeight * sap;

        totalLye += lye;

        recipe.push({
            oilName: oil.oilName,
            weight: oilWeight.toFixed(2),
            lye: lye.toFixed(2),
            percentage: oil.percentage.toFixed(2),
        });
    });

    totalLye = totalLye - (totalLye * (superFat / 100)); // Adjust lye for superfat
    const water = (totalOilWeightInOz * 0.38).toFixed(2); // Default water ratio

    console.log('Calculated recipe:', { recipe, totalLye, water });
    return { recipe, totalLye, water };
}


function displayStaticRecipe({ recipe, totalLye, water }) {
    const staticRecipeContent = document.querySelector('#static-recipe-content');
    const staticRecipeView = document.querySelector('#static-recipe-view');

    let recipeHTML = "<ul>";

    recipe.forEach(item => {
        recipeHTML += `<li>${item.oilName}: ${item.percentage} ${item.weight} (${item.lye} oz lye</li>`;
    });

    recipeHTML += `<li>Total Lye: ${totalLye.toFixed(2)} </li>`;
    recipeHTML += `<li>Water: ${water} oz</li>`;
    recipeHTML += "</ul>";

    staticRecipeContent.innerHTML = recipeHTML;

    staticRecipeView.classList.add('active');
    staticRecipeView.style.display = 'block';
}