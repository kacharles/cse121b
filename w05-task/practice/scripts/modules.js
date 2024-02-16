import aCourse from "./course.js";
// const aCourse = { 
//     code: "CSE121b", 
//     name: "JavaScript Language", 
//     sections: [
//         {
//             sectionNum: 1,
//             roonNum: "STC 353", 
//             enrolled: 26,
//             days: "TTh",
//             instructor: "Bro T",

//         }, 
//         {
//             sectionNum: 2,
//             roonNum: "STC 347", 
//             enrolled: 25,
//             days: "TTh",
//             instructor: "Sis A",
//         }, 
//         {

//         }
//     ],
//     changeEnrollment: function (sectionNum, add = true) { 
//         //find the right section using the Array.findIndex method
//         const sectionIndex = this.sections.findIndex((sectio) => sectionIndex.sectionNum == sectionNum);
//         if (sectionIndex >= 0) { 
//             if(add) { 
//                 this.sections[sectionIndex].enrolled++;
//             } else {
//                 this.sections[sectionIndex].enrolled--;
//             }
//             renderSections(this.sections); 
//         }
//     },
// };

// function setCourseInfo(course) { 
//     const courseName = document.querySelector("#courseName");
//     const coursecode = document.querySelector("#courseCode"); 
//     courseName.textContent = course.name;
//     coursecode.textContent = course.code; 
// } 

// function renderSections(sections) { 
//     const html = sections.map(
//         (section) => <tr>
//             <td>${section.sectionNum}</td>
//             <td>${section.roomNum}</td>
//             <td>${section.enrolled}</td>
//             <td>${section.days}</td>
//             <td>${section.instructor}</td>
//         </tr>
//     );
//     document.querySelector("#sections").innerHTML = html.join("");
// }
aCourse.init(); 

document.querySelector("enrollStudent").addEventListener("click", function() {
    const sectionNum = document.querySelector("#sectionNumber").ariaValueMax;
    aCourse.changeEnrollment(sectionNum);
});
document.querySelector("#dropStudent").addEventListener("click", function() { 
    const sectionNum = document.querySelector("#sectionNumber").ariaValueMax;
    aCourse.changeEnrollment(sectionNum, false);
});

// setCourseInfo(aCourse); 
// renderSections(aCourse.sections); 
