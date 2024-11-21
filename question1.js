// console.log("hellow word")
// Q1 Write a function sum such that
//  sum(1)(2)(3)(4)(5) //returns 15
// // sum(3)(7)() returns 10 and so on

// // Assumption: all inputs are integers


// function sum(a){
//   return function(b){
//     return function(c){
//       return function(d){
//         return function(e){
//           console.log(a+b+c+d+e)
//         }
//       }
//     }
//   }
// }

function sum(a) {
    function innerSum(b) {
      if (b === undefined){
        return a; 
      }
      a += b;
      return innerSum; // Return the function -chaining
    }
    return innerSum; // inner function initial
  }
  
  sum(1)(2)(3)(4)(5)(); 
  sum(3)(7)(); 
  
  console.log(sum(1)(2)(3)(4)(5)());
  console.log(sum(3)(7)());