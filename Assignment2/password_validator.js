// passwordn validator
// Objective: prompt user to set pass word, then ask them to enter again to confirm
// if dont match then prompt again

let password = prompt("Set a password");

do {
  confirmPassword = prompt("Confirm your password");
}
while (password != confirmPassword)

console.log("Password set");