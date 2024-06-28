// objective: ask user for number, then print multiplication table for that number from 1 to 10
let number = prompt("Enter a number");

for (let i = 1; i <= 10; i++) {
  console.log(number + " x " + i + " = " + number * i); 
}
