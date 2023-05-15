//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Object Literal
// const car1 = {
//     name: 'Honda city',
//     manufacturer: 'Honda',
//     fuelCapacity: '40L',
// }
// const car2 = {
//     name: 'Sonet',
//     manufacturer: 'Kia',
//     fuelCapacity: '50L',
// }
//  console.log(car1.name,car1.manufacturer);
//  console.log(car2);

 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 //Object using new Keyword

//  const myDetails= new Object();
//  myDetails.name = "Rishabh singh",
//  myDetails.title = "Fresher and looking for a intership",
//  myDetails.expertise = "frontend developer",
//  myDetails.followers = 15
//  myDetails.greetMe= function(){
//     console.log("Hello from rishabh singh -- Pbh");
//  }

//  console.log(myDetails.greetMe());

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Using Constructor

function Course(instructor,title,discription,language,fees){
    this.instructor = instructor,
    this.title = title,
    this.discription = discription,
    this.language = language,
    this.fees = fees
}

const javaScriptCourse = new Course ("Rishabh singh","JavaScript","FSD","Hindi","1000");

// const FSD = new Course ("Rishabh singh","FSD","FSD","Hindi","1000");
// console.log(javaScriptCourse,FSD);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Object Method+++++++ Keys method+++++++++++++++++++++++++++++++++++++++++++++++++
// console.log(Object.keys(javaScriptCourse));

//Object Method+++++++ Value method+++++++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Object.values(javaScriptCourse));

//Object Method+++++++ Freeze method++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Object.freeze(javaScriptCourse)
// javaScriptCourse.instructorCompany = 'USV Private limited'
// console.log(javaScriptCourse);

//Object Method+++++++ Seal method+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// javaScriptCourse.fees = 5000;
// Object.seal(javaScriptCourse);
// console.log(javaScriptCourse);
//Enter a Loops++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 for (const key in javaScriptCourse){
    // console.log(key);
    console.log(javaScriptCourse[key]);
 }

