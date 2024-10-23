

//list of things to do in js
// get a reference to the element we want to insert our articles into. You may need to add a class or id to the element your articles are currently in to do this (document.querySelector)
// for each article in our list:
    //create a new article element. If you have any classes on your hard codded articles in your index.html, add those to your new element in javascript
    //create a template literal string and store it in a variable. The contends of this string should be a copy/paste of the contents of one of your current articles from teh HTML file.
    // everywhere in the copy/pasted HTML where there is information specific to this post we should replace it with the data from teh current article. (${item.date}) 
    // set the innerHTML of the new article to the template literal string we just built
//Append the new article to the output element so it will show on the page
//create one or more functions that will be responsible to build and output the HTML necesary to display the list of articles
// So if we wanted to use the title of the first object in our variables array we would write articles[0].title. 
    // We can use a loop such as the Array.forEach loop we studied this week to make it easy to access each object in the array one at a 
    //time no matter how many items there are in the array.



// function createBookReview(article) {
//     //create an outter container for each book
//     const articleDiv = document.createElement("div");
//     articleDiv.classList.add("book");

//     //create and append the title
//     const title = document.createElement("h3");
//     title.textContent = article.title;
//     articleDiv.appendChild(title);

//     //create and append the book image
//     const image = document.createElement("img");
//     image.src = article.imgSrc;
//     articleDiv.appendChild(image);

//     const description = document.createElement("p");
//     description.textContent = article.description;
//     articleDiv.appendChild(description);

//     //return completed article element
//     return articleDiv;
// }

// function displayReview(articles) {
//     //create container where articles will be displayed
//     const container = document.querySelector(".container");

//     //loop throuch each article and add to the DOM
//     articles.forEach(article => {
//         const articleElement = createBookReview(article);
//         container.appendChild(articleElement);
//     });
// }

// const articles = [
//     {
//         title: "Septimus Heap: Book One: Magyk",
//         imageSrc: "images/book-title.png",
//         description: "If you enjoy stories about seventh sons of seventh sons and magyk, this is the book for you. Read More..."
//     },
//     {
//         title: "Septimus Heap: Book Two: Flyte",
//         imageSrc: "images/book-two.png",
//         description: "In the second book we see Septimus as the apprentice to Marcia. Marcia is accompanied by a shadow which gets darker throughout the book. Read More..."
//     }
// ]

// document.addEventListener('DOMContentLoaded', () => {
//     dicplayArticles(articles);
// })