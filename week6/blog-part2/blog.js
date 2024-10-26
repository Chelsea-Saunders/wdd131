

const articles = [
	{
		id: 1,
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
		id: 2,
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
	}
]










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