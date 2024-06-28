// Your task is to create a JavaScript function named analyzeArray that takes an array of numbers as an argument and performs the following:
// Find the Maximum: Determine the maximum number in the array.
// Find the Minimum: Determine the minimum number in the array.
// Calculate the Average: Compute the average of the numbers in the array.
// Identify Even Numbers: Create a new array that contains only the even numbers from the original array.
// Here’s the skeleton of the function:

function analyzeArray(arr) {
   let max = Math.max(arr);
   let min = Math.min(arr);
   let sum = 0;
   for (let i = 0; i < arr.length; i++)
   {
      sum += arr[i];
   }
   let avg = sum / arr.length;
   let even = [];
   for (let i = 0; i < arr.length; i++) 
   {
      if (arr[i] % 2 == 0)
      {
         even.push(arr[i]);
      }
   }
   // print out the results
   console.log("Maximum: " + max);
   console.log("Minimum: " + min);
   console.log("Average: " + avg);
   console.log("Even Numbers: " + even);
}

// Hints:
// Remember to use JavaScript syntax correctly.
// You can use conditionals (if, else if, else) to check if a number is even.
// Functions can be used to calculate the maximum, minimum, and average.
// Arrays in JavaScript can be manipulated using various methods like push().

// Expected output when you give the array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].

// max: The maximum value in the array, which would be 10.
// min: The minimum value in the array, which would be 1.
// avg: The average of all the numbers in the array, which would be 5.5.

