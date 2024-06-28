// Guessing game
// Objective: Create a program that generates a random number between 1 and 10. Prompt the user to guess the number. Continue asking the user for their guess
// until they guess the correct number.
// Hints:
// • Use the Math.random() function to generate a random number.
// • Use a while loop to keep asking the user until they get the right answer.
let x  = Math.floor((Math.random() * 11));
let y = prompt("Guess the number between 1 and 10");
while (y != x) {
  y = prompt("Guess the number between 1 and 10");
}
console.log("You guessed the correct number");
