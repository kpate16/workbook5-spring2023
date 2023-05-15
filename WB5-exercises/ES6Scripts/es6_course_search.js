let courses = [
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

for (const course of courses) {
    
}
// When does the PROG200 course start?
const result1= courses.find(course =>course.CourseId==="PROG200");
console.log("When does the PROG200 course start?:::: " + result1.StartDate);


// What is the title of the PROJ500 course?

const result2= courses.find(course =>course.CourseId==="PROJ500");
console.log("What is the title of the PROJ500 course?:::::" + result2.Title);




//  What are the titles of the courses that cost $50 or less?
var result3= courses.filter(function(course){
    return Number(course.Fee) <= 50;
});
console.log(result3);


// What classes meet in "Classroom 1"?


var result4= courses.filter(function(course){
    return course.Location==="Classroom 1";
}).map((finalResult) => {
    return finalResult.Title;
});
console.log(result4);



