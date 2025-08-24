// highestMarks.js
// Mini task: Find highest marks from an array

let marks = [78, 92, 56, 88, 99, 67];

let highest = marks[0]; // assume first element is highest
for (let i = 1; i < marks.length; i++) {
    if (marks[i] > highest) {
        highest = marks[i];
    }
}

console.log("Marks List:", marks);
console.log("Highest Marks =", highest);
