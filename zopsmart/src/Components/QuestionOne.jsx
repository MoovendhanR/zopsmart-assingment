import React from "react";

function sum(a) {
  function innerSum(b) {
    if (b === undefined) {
      return a; 
    }
    a += b; 
    return innerSum; // Return the function for further chaining
  }
  return innerSum; // Initial call to inner function
}

const QuestionOne = () => {
  const result1 = sum(1)(2)(3)(4)(5)(); 
  const result2 = sum(3)(7)(); 

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Sum Function Results</h1>
      <p>
        <strong>sum(1)(2)(3)(4)(5)():</strong> {result1}
      </p>
      <p>
        <strong>sum(3)(7)():</strong> {result2}
      </p>
    </div>
  );
};

export default QuestionOne;
