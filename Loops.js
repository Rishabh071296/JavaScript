//While Loops+++++++++++++++++++++++++++++++++++++++++++++++++++
// //Print 1 to 10 Number

// let endNumber = 10;
// let num = 1;

// while (num <= endNumber){
//     console.log(num);
//     num = num +1;
// }

// Print 10 to 1 Number

// let endNumber = 1;
// let num = 10;

// while (num >= endNumber){
//     console.log(num);
//     num = num - 1;
// }

// Table of 2

// let endNumber = 10;
// let num = 1;

// while (num <= endNumber){
//     console.log(`2* ${num} = ${2*num}`);
//     num = num + 1;
// }

// Do-While Loops+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let endNumber = 7;
// let num = 1;
// let result = '';
// do{
// result = result + num;
//     num = num + 1;
// } while(num <= endNumber);
// console.log(result);

//For Loops ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// for(let count = 1;count<=5; count = count + 1){
//     console.log("PW Skills");

// }

// for(let num = 2; num <= 20; num +=2){
//     console.log(num);
// }

//Nested Loops++++++++++++++++++++++++++++++

// for (let outercount = 1; outercount <= 3; outercount++){
//     console.log("outer Loop:",outercount);
//     for(let innercount =1; innercount <=2; innercount++){
//         console.log("--inner Loop:",innercount);
//     }
// }

//Break++++++++++++++++++++++++++++++++++++++++++
// let endNumber = 100;
// let num = 1;
// while(num <= endNumber){
//     if (num>10){
//         break;
//     }
//     console.log(`2 * ${num} = ${2*num}`);
//     num++
// }

//Continue+++++++++++++++++++++++++++++++++++++++++

//  for(let num = 1; num <= 20; num +=1){
//     if (num % 2 ===0){
//         continue;
//     }
//      console.log(num);
//  }