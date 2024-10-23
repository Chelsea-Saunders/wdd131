

//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
    return `<ul>${step}</ul>`;
}

//Activity 1 - Map
const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join("");// set the innerHTML

//Activity 2 - Map
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    } else if (grade === "C") {
        points = 2;
    } else if (grade === "D") {
        points = 1;
    } else {
        points = 0;
    }
    return points;
}
const gpaPoints = grades.map(convertGradeToPoints);
document.querySelector("#map").innerHTML = gpaPoints.join(", ");

//Activity 3 - Reduce
const sum = gpaPoints.reduce((total, points) => total + points, 0);
const gpa = sum / gpaPoints.length;
document.querySelector("#reduce").innerHTML = gpa;

//this could be simplified even more to:
// const gpa = gpaPoints.reduce((total, item) +> total +item, 0) / gpaPoints.length;

//Activity 4 - Filter
const fruit = ["peach", "apple", "tomato", "grape"];
const shortFruit = fruit.filter(function(word) {
    return word.length < 6;
});
//shortened option:
//const shortFruit = words.filter((word) => word.length < 6);
document.querySelector("#filter").innerHTML = shortFruit;

//Activity 5 - indexOf
const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = numbers.indexOf(luckyNumber);
document.querySelector("#indexOf").innerHTML = luckyIndex