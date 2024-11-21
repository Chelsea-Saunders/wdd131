import recipes from "./recipes.mjs";


function getRandom(num) {
    return Math.floor(Math.random() * num);
}
function getRandomListEntry(list) {
    // const listLength = list.length;
    const randomNum = getRandom(list.length);
    return list[randomNum];
}
// console.log(getRandomListEntry(recipes));

function recipeTemplate(recipe) {
    return `
        <div class="everything-container">
            <section class="column-one">
                <img src="${recipe.image}" alt="${recipe.name}" class="recipe-img">
            </section>
            <section class="column-two">
                <div class="food-category">
                    <p class="tags">${recipe.tags.join(", ")}</p>
                </div>
                <h2>${recipe.name}</h2>
                <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                    ${"⭐".repeat(recipe.rating)}${"☆".repeat(5 - recipe.rating)}
                </span>
                <p class="description">${recipe.description}</p>
            </section>
        </div>
    `;
}
// function tagsTemplate(tags) {
//     const html = tags.map(tag => `<span class="tag">${tag}</span>`).join("");
//     return html;
// }
// function ratingTemplate(rating) {
//     let html = `<span
//     class="rating"
//     role="img"
//     aria-label="Rating: ${rating} out of 5 stars"
//     >`
//     for (let i = 0; i < rating; i++) {
//         html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
//     } for (let i = rating; i < 5; i++) {
//         html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
//     } html += `</span>`;
//     return html;
// }
// const recipe = getRandomListEntry(recipes);
// console.log(recipeTemplate(recipe));

function renderRecipes(recipeList) {
    //get element we will output the recipes into
    const recipeContainer = document.querySelector("#recipe-container");
    //if no recipes match, show a message
    if (!recipeContainer) {
        console.error("recipe container not found");
        return;
    }

    //use recipeTemplate function to transform our recipe object into HTML string
    const recipeHTML = recipeList.map(recipe => recipeTemplate(recipe)).join("");

    //set the HTML strings as the innerHTML of the output element
    recipeContainer.innerHTML = recipeHTML;
}

function init() {
    //get random recipe
    const randomRecipe = getRandomListEntry(recipes);
    //render recipe with renderRecipes
    renderRecipes([randomRecipe]);
}
init();

const searchButton = document.querySelector("#search-button");
const searchInput = document.querySelector(".search-input");

//searchHandler function filters the recipes array
searchButton.addEventListener("click", searchHandler);
function searchHandler(event) {
    event.preventDefault();
    const query = searchInput.value.toLowerCase().trim();

    if (query) {
        const filteredRecipes = recipes.filter(recipe => {
            const matchesName = recipe.name.toLowerCase().includes(query);
            const matchesDescription = recipe.description.toLowerCase().includes(query);
            const matchesTags = recipe.tags.some(tag => tag.toLowerCase().includes(query));
            const matchesIngredients = recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query));
            return matchesName || matchesDescription || matchesTags || matchesIngredients;
        });
        renderRecipes(filteredRecipes);
    } else {
        console.log("Please enter a search term");
    }
}
//sort recipes alphebetically
recipes.sort((a, b) => a.name.localeCompare(b.name));   
console.log(recipes);



// function randomRecipe(recipes) {
//     const randomIndex = Math.floor(Math.random() * recipes.length); //getting a random index
//     return recipes[randomIndex]; //returning a random recipe from the array
// }
// const random = randomRecipe(recipes);
// console.log(random);

//create random number
// function randomNumber(max) {
//     return Math.floor(Math.random() * max);
// }
// //OR













// function randomNumber(num = recipes.length) { //this makes it a global so the function can be used again
//     return Math.floor(Math.random() * num);
// }

// //create a function that will use imported recipes and use randomNumber to return a random recipe
// function randomRecipe() {
//     const randomIndex = randomNumber(recipes.length);
//     return recipes[randomIndex];
// }
// //output random recipe
// // console.log(randomRecipe());

// function generateRecipeHTML(recipe) {
//     return `
//     <div class="everything-container">
//         <section class="column-one">
//             <img src="${recipe.image}" alt="${recipe.name}" class="recipe-img">
//         </section>
//         <section class="column-two">
//             <div class="food-category">
//                 <p class="tags">${Array.isArray(recipe.tags) ? recipe.tags.join(", ") : recipe.tags}</p>
//             </div>
//             <h2>${recipe.name}</h2>
//             <span 
//                 class="rating"
//                 role="img"
//                 aria-label="Rating: ${recipe.rating} out of 5 stars"
//             >
//                 ${"⭐".repeat(recipe.rating)}${"☆".repeat(5 - recipe.rating)}
//             </span>
//             <p class="description">${recipe.description}</p>
//         </section>
//     </div>
//     `;
// }

// const recipeContainer = document.querySelector("#recipe-container");
// recipeContainer.innerHTML = generateRecipeHTML(randomRecipe());



// // const testRecipe = {
// //     name: "Sweet Potato Waffels",
// //     image: "image/sweet-potato-waffle-md.jpg",
// //     category: "Breakfast",
// //     rating: 4,
// //     description:"Savory waffles made with sweet potato and a hint of ginger"
// // };
// // document.querySelector("#recipe-container").innerHTML = generateRecipeHTML(testRecipe);