
import aCourse from "./courses.mjs";

aCourse.init();

document.querySelector("#enrollStudent").addEventListener("click", function() {
    const sectionNumber = parseInt(document.querySelector("#sectionNumber").value, 10);
    if (!isNaN(sectionNumber)) {
        aCourse.changeEnrollment(sectionNumber, true);
    } else {
        console.error("Invalid section number entered");
    }
});
document.querySelector("#dropStudent").addEventListener("click", function() {
    const sectionNumber = parseInt(document.querySelector("#sectionNumber").value, 10);
    if (!isNaN(sectionNumber)) {
        aCourse.changeEnrollment(sectionNumber, false);
    } else {
        console.error("Invalid section number entered");
    }
    
});




// courses.js
// const aCourse = {
//     code: "CSE121b",
//     name: "Javascript Language",
//     sections: [
//         {
//             sectionNum: 1, 
//             roomNum: 'STC 353',
//             enrolled: 26,
//             days: 'TTH',
//             instructor: 'Bro T'
//         },
//         {
//             sectionNum: 2, 
//             roomNum: 'STC 347',
//             enrolled: 28,
//             days: 'TTH',
//             instructor: 'Sis A'
//         },
//         {
//             sectionNum: 3, 
//             roomNum: 'STC 357',
//             enrolled: 25,
//             days: 'MWF',
//             instructor: 'Bro B'
//         }
//     ],

//     //new entollStudent method
//     enrollStudent: function(sectionNum) {
//         //find the section with the matching section number
//         const section = this.sections.find(sec => sec.sectionNum === sectionNum);

//         //if section is found, increment the enrolled count by one
//         if (section) {
//             section.enrolled += 1;
//             console.log(`Student successfully enrolled in ${sectionNum}. Total enrolled is: ${section.enrolled}`);
//             renderSections(this.sections);
//         } else {
//             console.log(`Section ${sectionNum} not found`);
//         }
//     },

//     dropStudent: function(sectionNum) {
//         //find the section with the matching section number
//         const section = this.sections.find(sec => sec.sectionNum === sectionNum);

//         //if section is found, drop the enroll count by one
//         if (section && section.enrolled > 0) {
//             section.enrolled -= 1;
//             console.log(`Student successfully dropped from ${sectionNum}. Total enrolled is now: ${section.enrolled}`);
//             renderSections(this.sections);
//         } else if (!section) {
//             console.log(`Section ${sectionNum} not found`)
//         } else {
//             console.log(`No students to drop in ${sectionNum}.`);
//         }
//     }
// };

//   //function to set course name and code
//   function setCourseInfo(course) {
//     const courseName = document.querySelector('#courseName');
//     const courseCode = document.querySelector('#courseCode');
//     courseName.textContent = course.name;
//     courseCode.textContent = course.code;
//   }

  //function to populate the sections in the table
//   function sectionTemplate(section) {
//     return `
//         <tr>
//             <td>${section.sectionNum}</td>
//             <td>${section.roomNum}</td> 
//             <td>${section.enrolled}</td>
//             <td>${section.days}</td>
//             <td>${section.instructor}</td>
//         </tr>`;
//   }
  
//   function renderSections(sections) {
//     console.log("sections:", sections);
//     if (!Array.isArray(sections)) {
//         console.error("Error: sections is not an array");
//         return;
//     }
//     const html = sections.map(sectionTemplate).join('');
//     document.querySelector("#sections").innerHTML = html;
//   }


// //call the functions to display course info and sections
// setCourseInfo(aCourse);
// renderSections(aCourse);

// aCourse.enrollStudent(1);
// // renderSections(aCourse.sections);

// // button listeners
// const enrollStudent = document.querySelector('#enrollStudent');
// const dropStudent = document.querySelector('#dropStudent');

//add event listener for enroll button
// enrollStudent.addEventListener('click', function() {
//     //get section number from input field
//     const sectionNum = parseInt(document.querySelector('#sectionNumber').value, 10);

//     //check if sectionNumber is a valid number
//     if (!isNaN(sectionNum)) {
//         aCourse.enrollStudent(sectionNum); 
//     } else {
//         console.log("Enter a valid section number");
//     }
// });
//event listender for dropping student
// dropStudent.addEventListener('click', function() {
//     //get section number from input field
//     const sectionNum = parseInt(document.querySelector('#sectionNumber').value, 10);

//     //check if sectionNumber is a valid number
//     if (!isNaN(sectionNum)) {
//         aCourse.dropStudent(sectionNum); 
//     } else {
//         console.log("Enter a valid section number");
//     }
// });