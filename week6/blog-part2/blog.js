

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