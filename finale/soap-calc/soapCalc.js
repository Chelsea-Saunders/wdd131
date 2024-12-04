
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
//Event listener for base oil
document.getElementById('add-oil').addEventListener('click', () => {
    addEntry('base-oil', 'selected-oils', 'fatsNoils');
});

//Event listener for additives
document.getElementById('add-additive').addEventListener('click', () => {
    addEntry('additive', 'selected-additives', 'choose-additives');
});

//clear field event listner
document.getElementById('clear-field').addEventListener('click', () => {
    //clear oils field and additives field
    document.getElementById('selected-oils').innerHTML = '';
    document.getElementById('selected-additives').innerHTML = '';

    // //hide buttons
    // document.getElementById('clear-field').style.display = 'none';
    // document.getElementById('calculate-recipe').style.display = 'none';

    // //remove borders 
    // document.getElementById('selected-oils').style.border = 'none';
    // document.getElementById('selected-additives').style.border = 'none';
});

//clear recipe event listener
document.getElementById('reset-recipe').addEventListener('click', () => {
    //clear oils and additives containers
    document.getElementById('selected-oils').innerHTML = '';
    document.getElementById('selected-additives').innerHTML = '';
    //reset dropdowns to default value
    document.getElementById('base-oil').value = 'fatsNoils';
    document.getElementById('additive').value = 'choose-additives';
    document.getElementById('unit-of-measurement').value = 'unit-of-measurement';   
    document.getElementById('lye-type').value = 'lye-type';

    //clear input fields
    document.getElementById('super-fat').value = '';
    document.getElementById('total-oil-weight').value = '';
    document.getElementById('water').value = '';
    //remove borders 
    document.getElementById('selected-oils').style.border = 'none';
    document.getElementById('selected-additives').style.border = 'none';
    //hide buttons
    document.getElementById('clear-field').style.display = 'none';
    document.getElementById('calculate-recipe').style.display = 'none';
});

//show buttons and borders when oils nad additives are added
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

    //makd container vidible
    oilsContainer.style.display = 'block';
    additivesContainer.style.display = 'block';
}

    

    // //add-oil event listener
    // document.getElementById('add-oil').addEventListener('click', () => {
    //     addEntry('base-oil', 'selected-oils', 'fatsNoils');
    //     showButtonsAndBorders();
    // });
    // //add-additive event listener
    // document.getElementById('add-additive').addEventListener('click', () => {
    //     addEntry('additive', 'selected-additives', 'choose-additives');
    //     showButtonsAndBorders();
    // });