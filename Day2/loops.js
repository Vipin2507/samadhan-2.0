// loops.js
// Learning loops: for, while, forEach

// for loop
for (let i = 1; i <= 5; i++) {
    console.log("For Loop - Count:", i);
}

// while loop
let count = 1;
while (count <= 5) {
    console.log("While Loop - Count:", count);
    count++;
}

// forEach loop with array
let subjects = ["Math", "JavaScript", "AI", "Data Science"];
subjects.forEach((sub, index) => {
    console.log("Subject", index + 1, ":", sub);
});
