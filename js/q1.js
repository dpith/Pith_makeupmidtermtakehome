/* Midterm
   Question 1 JavaScript code
   Question 1 - Task requiring a function

Use the "prompt" to query the user for two positive integers: start number and end number.  
You may use the prompt command twice.  Output to the console the sum of the numbers from start to end (inclusive) 
that are NOT divisible by 2.


a. You MUST use a function to calculate the sum.  Create a function per the following:
   Input: start number and end number
   Output/Return: The sum of the numbers from start number to end number (inclusive) that are NOT divisible by 2.
      A single number is returned.  No other tasks are performed by the function.
   Failure to use a function per the requirements, even if the output is correct, will result in an incorrect solution
b. For valid input, write the result on two lines as shown above
   Show the start number and end number in quotes
c. Must validate user input.  For invalid data, display to the console error a message on two lines as shown below (again, show data entered in quotes).
*/

// << YOUR CODE HERE >>

// Get input
// const n1 = prompt("Enter number 1");
// const n2 = prompt("Enter number 2");

// test inputs
const n1 = 1;
const n2 = -10;

// Convert input to number for validation
const numN1 = Number(n1);
const numN2 = Number(n2);

// Function to calculate sum
const sumNotDivBy2 = (start, end) => {
    let tot = 0;
    for (let i = start; i <= end; i++) {
       if (i % 2 !== 0 ) {
          tot += i;
       }
    }
    return tot;
    
 }

// Test function
// console.log(sumNotDiv2(3,7));

// console.log(n1, n2, numN1, numN2);
if (numN1 > 0 && numN2 > 0 && numN1 < numN2) {
   // console.log("calculate sum");
   console.log(`The sum of ${numN1} and ${numN2}`);
   console.log(sumNotDivBy2(numN1, numN2));
} else {

   alert(`you must enter positive integers! you entered ${numN1} and ${numN2}`);
}

// Output that displays title
const paraTitle = document.createElement("h3");
paraTitle.textContent = `Sum of numbers starting with ${numN1} and ending with ${numN2} with odd numbers highlighted green`;
paraTitle.style.textAlign = "center";


// Add to HTML document
const oddNumber = document.getElementById("output");
oddNumber.appendChild(paraTitle);

// Create table
const tblElem = document.createElement("table");
tblElem.setAttribute("align", "center")

// Inside table first
for (let i = 0; i < numN2; i++) {
    // Create rows
    const rowElem = document.createElement("tr");
    // Create columns - inner loop
    for (let j = 1; j <= 2; j++) {
        const tdElem = document.createElement("td");
        // Assign text value and add to row
        tdElem.innerText = i + 1;
        if (i % 2 === 0) {
            tdElem.classList.add("bgGreen");
        }
        rowElem.appendChild(tdElem);
    }
    tblElem.appendChild(rowElem);
}

// Add table to output
oddNumber.appendChild(tblElem);




