

// getGradeArray () {

// }

// function clickHandler() {
//     const gradeArray = getGradeArray() {

//     };
// };
// document
//     .querySelector("submitButton");
//     .addEventListener("click", clickHandler);


// const GPA = convertLetterToNumber =


//function to get grades and return them in uppercase
function getGrades(input) {
    let grades = input.split(",").map(grade => grade.trim().toUpperCase()); //.split splits input up by commas. .map iterates over each grade and removes any extra using the trim() then converts all letter grades to upper case.
    return grades;
}

// let exampleInput = "A, b, c, D";
// let grades = getGrades(exampleInput)
// document.querySelector("#getGrades").innerHTML = grades.join(", ");

//Converts letter grade to GPA
function lookupGrade(grade) {
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

console.log(lookupGrade("A"));
console.log(lookupGrade("B"));
console.log(lookupGrade("C"));
console.log(lookupGrade("D"));
console.log(lookupGrade("f"));

// let exGrade = "A";
// let gradePoints = lookupGrade(exGrade);

// document.querySelector("#lookUpGrade").innerHTML = `The GPA for grade ${exGrade} is: ${gradePoints}`

//event handler function for button click
function clickHandler() {
    //get input value from grades entered by user
    const input = document.getElementById("grades").value;

    //call getGrades() to get list of grades
    const grades = getGrades(input);

    //map/call each grade and match with corrisponding GPA poings using lookUpGrade()
    const gpaPoints = grades.map(grade => lookupGrade(grade));

    //calculates total GPA
    const totalGPA = gpaPoints.reduce((total, points) => total + points, 0);

    //calculate average GPA
    const averageGpa = totalGPA / gpaPoints.length

    //Display GPA NOTE TO SELF you don't need .join() since it's already a number
    // document.getElementById("output").innerHTML = `GPA = ${averageGpa.toFixed(2)}`;
    //can also write it:
    outputGPA(averageGpa, "#output");
}

//take gpa vlaue and display it in html in the element identified by the selector
function outputGPA(averageGpa, selector) {
    //use querySelector to find the element and display the GPA
    document.querySelector(selector).innerHTML = `GPA = ${averageGpa.toFixed(2)}`;
}

//add event listener to button
document.getElementById("submitButton").addEventListener("click", clickHandler);

//ChatGPT: https://chatgpt.com/share/67184a70-441c-800b-a0ca-3fa4054f25e3