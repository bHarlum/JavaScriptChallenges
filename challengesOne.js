// Create a new variable called user, set the value to: tom
// Write an if statement: if the user's name is tom, say 'Hello Tom'
// Add an else condition: say 'Hello someone other than Tom'
// Add a new variable called age, set the value to: 18
// If the user is 18, say 'welcome to the casino!'
// Research 'prompt'. Use it in your code to ask the user for their age.
// If the user is less than 18 years old, use the alert method to deny entry.

students = []
student = {};

student.name = prompt("What is your name? ");
student.age = prompt("What is your age? ");

students.push(student);

if(student.name){
    alert(`Hello ${student.name}`);
}

if(student.age > 17){
    alert("Welcome to the casino!");
}
else{
    alert(`Get outa here! You're too young! you silly ${student.name}`);
}
