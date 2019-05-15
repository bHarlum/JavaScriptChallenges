// Assign a new empty object to a variable called me
// On the next line, add one key 'age' and set its value to your age
// On the next line, add one key 'current location' and set its value to your current location
// Use console.log to display the age and current location on screen
// Use code to add an array of hobbies to your me object
// Use code to delete your age key
// Iterate through me.hobbies and log each hobby to the screen

// let me =  {};
// me.age = 26;
// me["current location"] = "North Sydney";
// console.log(me["current location"]);
// me.hobbies = ["Tennis", "Golf", "Canyoning"];
// delete me.age;
// //for loop
// for(i in me.hobbies){
//     console.log(me.hobbies[i]);
// }
// me.hobbies.push("Drones");
// me.hobbies[0].delete();
// me.mother = {
//     age: 0,
//     location: ""
// };


let me = {
    "current location": "North Sydney",
    age: 26,
    hobbies: ["Tennis", "Golf", "Canyoning"]
};
delete me.age;
for(i in me.hobbies){
    console.log(me.hobbies[i]);
}
me.hobbies.push("Drones");
me.hobbies[0].shift();
me.mother = {
    age: 0,
    location: ""
};

console.log(me.mother);
console.log(me.hobbies);
