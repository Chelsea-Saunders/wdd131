

const articles = [
	{
		id: "one",
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: "two",
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
    {
        id: "three", 
        title: "Belgarid Book One: Pawn of Prophecy",
        date: "February 12, 2022",
        description: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly",
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
        imgAlt: "Book cover for Pawn of Prophecy",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    }
];

function createText(article) {
    console.log("Creating text for", article.title);

    //create the article element
    const metadataContent =`
    <article id="${article.id}-metadata">
        <ul>
            <li><strong>Date:</strong> ${article.date}</li>
            <li><strong>Ages:</strong> ${article.ages}</li>
            <li><strong>Genre:</strong> ${article.genre}</li>
            <li><strong>Stars:</strong> ${article.stars}</li>
        </ul>
    </article>
    `;
    //append to .textContainer in .column-2
    document.querySelector(".column-2 .textContainer").innerHTML += metadataContent;
}

//create a function to generate a book entry with two articles
function addBookEntry(article) {
    console.log("Adding to .bookContainer", article.title);
    
    //template for main book entry
    const mainContent = `
    <article id="${article.id}">
        <h2>${article.title}</h2>
        <img src="${article.imgSrc}" alt="${article.imgAlt}">
        <p>${article.description}</p>
    </article>
    `;

    //append each article to the .bookContainer in .column-1
    document.querySelector(".column-1 .bookContainer").innerHTML += mainContent;
}

//new function to display all articles
function displayAllArticles() {
    console.log("Running displayAllArticles");

    document.querySelector(".column-1 .bookContainer").innerHTML = "";
    document.querySelector(".column-2 .textContainer").innerHTML = "";

    //loop through articles and add each to page
    articles.forEach((article) => {
        console.log("Processing article", article.id);
        createText(article);
        addBookEntry(article);  
    });
}
//call function to display all articles
displayAllArticles();

function createDropdown() {
    const dropdownContent = `
    <article class ="dropdown">
        <ul>
            <li>
                <label for="sort">Sort:</label>
                <select id="sort" name="sort">
                    <option value=" "></option>
                    <option value="default">Default</option>
                    <option value="assending">Assending</option>
                    <option value="desending">Desending</option>
                </select>
            </li>
            <li>
                <label for="age">Age:</label>
                <select id="age" name="age">
                    <option value=" "></option>
                    <option value="all-ages">All Ages</option>
                    <option value="under-8">Under 8</option>
                    <option value="8-10">8-10</option>
                    <option value="10-12">10-12</option>
                    <option value="12-14">12-14</option>
                    <option value="12-16">14-16</option>
                    <option value="adults">Adults</option>
                </select>
            </li>
            <li>
                <label for="genre">Genre:</label>
                <select id="genre" name="genre">
                    <option value=" "></option>
                    <option value="fantasy">Fantasy</option>
                    <option value="mystery">Mystery</option>
                    <option value="sci-fi">Sci Fi</option>
                    <option value="biographyAutobiography">Biography/Autobiography</option>
                    <option value="romance">Romance</option>
                    <option value="other">Other</option>
                </select>
            </li>
            <li>
                <label for="rating">Rating:</label>
                <select id="rating" name="rating">
                    <option value=" "></option>
                    <option value="1-star">1 Star</option>
                    <option value="2-star">2 Star</option>
                    <option value="3-star">3 Star</option>
                    <option value="4-star">4 Star</option>
                    <option value="5-star">5 Star</option>
                </select>
            </li>
        </ul>
    </article>
    `;

    //append to .dropdownContainer
    document.querySelector(".dropdownContainer").innerHTML += dropdownContent;
}
createDropdown();












// const articles = [
// 	{
// 		id: "one",
// 		title: 'Septimus Heap Book One: Magyk',
// 		date: 'July 5, 2022',
// 		description:
// 			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
// 		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
// 		imgAlt: 'Book cover for Septimus Heap 1',
// 		ages: '10-14',
// 		genre: 'Fantasy',
// 		stars: '****'
// 	},
// 	{
// 		id: "two",
// 		title: 'Magnus Chase Book One: Sword of Summer',
// 		date: 'December 12, 2021',
// 		description:
// 			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
// 		imgSrc:
// 			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
// 		imgAlt: 'Book cover for Magnus Chase 1',
// 		ages: '12-16',
// 		genre: 'Fantasy',
// 		stars: '⭐⭐⭐⭐'
// 	},
//     {
//         id: "three", 
//         title: "Belgarid Book One: Pawn of Prophecy",
//         date: "February 12, 2022",
//         description: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly",
//         imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
//         imgAlt: "Book cover for Pawn of Prophecy",
//         ages: "12-16",
//         genre: "Fantasy",
//         stars: "⭐⭐⭐⭐⭐"
//     }
// ];
// // displayAllArticles();

// // // get a reference to the container you want to use
// // const bookContainer = document.querySelector(".bookContainer");

// // //create a function to create a new article with content
// // function createBook(id, title, imgSrc, imgAlt, description) {
// //     //create the article element
// //     const article = document.createElement("article");
// //     article.id = id; //this sets the id for the article

// //     //create and append the title
// //     const h2 = document.createElement("h2");
// //     h2.textContent = title;
// //     article.appendChild(h2);

// //     //create and appen the image
// //     const img = document.createElement("img");
// //     img.src = imgSrc;
// //     img.alt = imgAlt;
// //     article.appendChild(img);

// //     //create and append the description paragraph
// //     const p = document.createElement("p");
// //     p.textContent = description;
// //     article.appendChild(p);

// //     // append the article to the bookContainer
// //     bookContainer.appendChild(article);
// // }
// function createText(article) {
//     console.log("Creating text for", article.title);

//     //create the article element
//     const metadataContent =`
//     <article id="${article.id}-metadata">
//         <ul>
//             <li><strong>Date:</strong> ${article.date}</li>
//             <li><strong>Ages:</strong> ${article.ages}</li>
//             <li><strong>Genre:</strong> ${article.genre}</li>
//             <li><strong>Stars:</strong> ${article.stars}</li>
//         </ul>
//     </article>
//     `;
//     //append to .textContainer in .column-2
//     document.querySelector(".column-2 .textContainer").innerHTML += metadataContent;
// }

// // createBook("one", "Septimus Heap Book One: Magyk", "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg", "Book cover for Septimus Heap Book 1", "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.");
// // createBook("two", "Magnus Chase Book One: Sword of Summer", "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300", "Book cover for Magnus Chase Book 1", "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.");
// // createBook("three", "Belgarid Book One: Pawn of Prophecy", "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg", "Book cover for Pawn of Prophecy", "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.");
// // createText("four", "July 5, 2022", "10-14", "Fantasy", "****");
// // createText("five", "December 12, 2021", "12-16", "Fantasy", "⭐⭐⭐⭐");
// // createText("six", "February 12, 2022", "12-16", "Fantasy", "⭐⭐⭐⭐⭐");

// //create a function to generate a book entry with two articles
// function addBookEntry(article) {
//     console.log("Adding to .bookContainer", article.title);
    
//     //template for main book entry
//     const mainContent = `
//     <article id="${article.id}">
//         <h2>${article.title}</h2>
//         <img src="${article.imgSrc}" alt="${article.imgAlt}">
//         <p>${article.description}</p>
//     </article>
//     `;

//     //append each article to the .bookContainer in .column-1
//     document.querySelector(".column-1 .bookContainer").innerHTML += mainContent;
// }

// //     // template for metadata article
// //     const metadataContent = `
// //     <article id="${article.id}-metadata">
// //         <ul>
// //             <li><strong>Date:</strong> ${article.date}</li>
// //             <li><strong>Ages:</strong> ${article.ages}</li>
// //             <li><strong>Genre:</strong> ${article.genre}</li>
// //             <li><strong>Stars:</strong> ${article.stars}</li>
// //         </ul>
// //     </article>
// //     `;

// //     //append each article to correct container
// //     document.querySelector(".mainContainer .column-1").innerHTML += mainContent;
// //     document.querySelector(".mainContainer .column-2").innerHTML += metadataContent;
// // }

// //new function to display all articles
// function displayAllArticles() {
//     console.log("Running displayAllArticles");

//     document.querySelector(".column-1 .bookContainer").innerHTML = "";
//     document.querySelector(".column-2 .textContainer").innerHTML = "";

//     //loop through articles and add each to page
//     articles.forEach((article) => {
//         console.log("Processing article", article.id);
//         createText(article);
//         addBookEntry(article);  
//     });
// }
// //call function to display all articles
// displayAllArticles();





// const book = [
//     {
//         title: "Septimus Heap Book One: Magyk",
//         date: "July 5, 2022", 
//         description: "If you enjoy stories about seventh sons of seventh sons and magyk, this is the book for you.",
//         imgSrc: "images/book-title.png",
//         imgAlt: "Book cover for Magyk",
//         ages: "10-14", 
//         genre: "Fantasy",
//         stars: "⭐⭐⭐⭐"
//     },
//     {
//         title: "Magnus Chase Book One: Sword of Summer",
//         date: "December 12, 2012",
//         description: "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
//         imgSrc: "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
//         imgAlt: "Book cover for Sword of Summer",
//         ages: "12-16",
//         genre: "Fantasy",
//         stars: "⭐⭐⭐⭐"
//     },
//     {
//         title: "Belgarid Book One: Pawn of Prophacy", 
//         date: "February 12, 2022", 
//         description:
//         "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter grandted near-imortality by one of th Gods -- set out on a complex mission.", 
//         imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg", 
//         imgAlt: "Book cover for Pawn of Prophecy", 
//         ages: "12-16", 
//         genre: "fantasy", 
//         stars: "⭐⭐⭐⭐⭐"
//     }
// ]
// const dropdownOptions = [
//     {
//         optionTitle: "Sort",
//         optionOne: "", 
//         optionTwo: "Default", 
//         optionThree: "Assending", 
//         optionFour: "Desending" 
//     },
//     {
//         optionTitle: "Age", 
//         optionOne: "",
//         optionTwo: "All Ages", 
//         optionThree:"beginnerBooks",
//         optionFour: "eightToTen",
//         optionFive: "tenToTwelve",
//         optionSix: "twelveToFourteen",
//         optionSeven: "fourteenToSixteen",
//         optionEight: "Adult"
//     },
//     {
//         optionTitle: "genre",
//         optionOne: "",
//         optionTwo: "fantasy",
//         optionThree: "mystry",
//         optionFour: "sciFi",
//         optionFive: "biographyAutobiography",
//         optionSix: "romance",
//         optionSeven: "other"
//     },
//     {
//         optionTitle: "Rating",
//         optionOne: "",
//         optionTwo: "oneStar",
//         optionThree: "twoStar",
//         optionFour: "threeStar",
//         optionFive: "fourStar",
//         optionSix: "fiveStar"
//     }
// ]

// // const dropdownContainer = document.querySelector(".dropdown");
// // const addDropdown = (optionTitle, optionOne, optionTwo, optionThree, optionFour, optionFive, optionSix, optionSeven, optionEight) {
// //     const newDropdown = document.createElement("ul");
// //     newDropdown.classList.add('dropdown');

// //     newDropdown.innerHTML = `
// //     <li>${optionTitle}</li>
// //     <li>${optionOne}</li>
// //     <li>${optionTwo}</li>
// //     <li>${optionThree}</li>
// //     <li>${optionFour}</li>
// //     <li>${optionFive}</li>
// //     <li>${optionSix}</li>
// //     <li>${optionSeven}</li>
// //     <li>${optionEight}</li>
// //     `;

// //     dropdownContainer.appendChild(newDropdown);
// // }

// //select the container where the article will be inserted
// const container = document.querySelector(".book");

// //create a function to append the new article
// const addBook = (title, description, imgSrc, imgAlt) => {
//     //create a new book element
//     const newBook = document.createElement("div");
//     newBook.classList.add('book'); 

//     //set innerHTML with title and content
//     newBook.innerHTML = `
//     <h3>${title}</h3>
//     <img src="${imgSrc}" alt="${imgAlt}">
//     <p>${description}</p>
//     `;

//     //append to container
//     container.appendChild(newBook);  //container.querySelector('.book').appendChild(newBook);
// }

// const cont = document.querySelector(".text");
// const addDate = (date, ages, genre, stars) => {
//     //create element where div text will show
//     const newDate = document.createElement("div");
//     newDate.classList.add('text');

//     //set innerHTML with date, ages, genre and stars
//     newDate.innerHTML = `
//     <p>${date}</p>
//     <p>${ages}</p>
//     <p>${genre}</p>
//     <p>${stars}</p>
//     `;

//     //append to container
//     container.appendChild(newDate);
// }

// document.addEventListener('DOMContentLoaded', () => {
//     book.forEach(bk => {
//         addBook(bk.title, bk.description, bk.imgSrc, bk.imgAlt);
//         addDate(bk.date, bk.ages, bk.genre, bk.stars);
//     })
//     // dropdown.forEach(dd => {
//     //     addDropdown(dD.optionTitle, dD.optionOne, dD.optionTwo, dD.optionThree, dD.optionFour, dD.optionFive, dD.optionSix, dD.optionSeven, dD.optionEight)
//     // })
// });

// const dropdown = document.querySelector(".dropdown");
// const showDropdown = 
//check on my .dropdown
// console.log('dropdown element:', document.querySelector('.dropdown'));











//const book = [
//     {
//         title: "Septimus Heap Book One: Magyk",
//         date: "July 5, 2022", 
//         description: "If you enjoy stories about seventh sons of seventh sons and magyk, this is the book for you.",
//         imgSrc: "images/book-title.png",
//         imgAlt: "Book cover for Magyk",
//         ages: "10-14", 
//         genre: "Fantasy",
//         stars: "⭐⭐⭐⭐"
//     },
//     {
//         title: "Magnus Chase Book One: Sword of Summer",
//         date: "December 12, 2012",
//         description: "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
//         imgSrc: "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
//         imgAlt: "Book cover for Sword of Summer",
//         ages: "12-16",
//         genre: "Fantasy",
//         stars: "⭐⭐⭐⭐"
//     },
//     {
//         title: "Belgarid Book One: Pawn of Prophacy", 
//         date: "February 12, 2022", 
//         description:
//         "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter grandted near-imortality by one of th Gods -- set out on a complex mission.", 
//         imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg", 
//         imgAlt: "Book cover for Pawn of Prophecy", 
//         ages: "12-16", 
//         genre: "fantasy", 
//         stars: "⭐⭐⭐⭐⭐"
//     }
// ]
// //select main grid container
// const mainGrid = document.querySelector(".main-grid");

// //select main sectins within the main=grid
// const infoContainer = document.querySelector(".info-container");
// const container = document.querySelector(".container");
// const dropdownContainer = document.querySelector(".dropdown");

// //function to create dropdown "dynamically"
// const createDropdown = () => {
//     // const dropdownContainer = document.createElement("div");
//     // dropdownContainer.classList.add("dropdown");

//     dropdownContainer.innerHTML - `
//     <ul>
//         <li>
//             <label for="sort">Sort:</label>
//             <select id="sort" name="sort">
//                 <option value=" "></option>
//                 <option value="default">Default</option>
//                 <option value="assending">Assending</option>
//                 <option value="desending">Desending</option>
//             </select>
//         </li>
//         <li>
//             <label for="age">Age:</label>
//             <select id="age" name="age">
//                 <option value=" "></option>
//                 <option value="all-ages">All Ages</option>
//                 <option value="under-8">Under 8</option>
//                 <option value="8-10">8-10</option>
//                 <option value="10-12">10-12</option>
//                 <option value="12-14">12-14</option>
//                 <option value="12-16">14-16</option>
//                 <option value="adults">Adults</option>
//             </select>
//         </li>
//         <li>
//             <label for="genre">Genre:</label>
//             <select id="genre" name="genra">
//                 <option value=" "></option>
//                 <option value="fantasy">Fantasy</option>
//                 <option value="mystery">Mystery</option>
//                 <option value="sci-fi">Sci Fi</option>
//                 <option value="biographyAutobiography">Biography/Autobiography</option>
//                 <option value="romance">Romance</option>
//                 <option value="other">Other</option>
//             </select>
//         </li>
//         <li>
//             <label for="rating">Rating:</label>
//             <select id="rating" name="rating">
//                 <option value=" "></option>
//                 <option value="1-star">1 Star</option>
//                 <option value="2-star">2 Star</option>
//                 <option value="3-star">3 Star</option>
//                 <option value="4-star">4 Star</option>
//                 <option value="5-star">5 Star</option>
//             </select>
//         </li>
//     </ul>
//     `;
//     // mainGrid.appendChild(dropdownContainer);
// }

// //function to add each book
// const addBook = (book) => {
//     //create a new book element
//     const infoDetails = document.createElement("div");
//     infoDetails.classList.add("book-info");
//     infoDetails.innerHTML =`
//     <p><strong>Date:</strong> ${book.date}</p>
//     <p><strong>Ages:</strong> ${book.ages}</p>
//     <p><strong>Genre:</strong> ${book.genre}</p>
//     <p><strong>Rating:</strong> ${book.stars}</p>
//     `;
//     infoContainer.appendChild(infoDetails);

//     //add title, image ans description to center column
//     const bookContent = document.createElement(("div"));
//     bookContent.classList.add("book-content");
//     bookContent.innerHTML = `
//     <h3>${book.title}</h3>
//     <img src="${book.imgSrc}" alt = "${book.imgAlt}">
//     `;
//     container.appendChild(bookContent);
// }

// //when dom content is loaded, create dropdown and add book details
// document.addEventListener('DOMContentLoaded', () => {
//     createDropdown();//add dropdown
//     book.forEach(addBook); //add book   
// });