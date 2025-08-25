// arrayMethods.js
// Practicing map, filter, and reduce

// 1. .map() - to double the numbers
const numbers = [1, 5, 10, 15];
const doubledNumbers = numbers.map(num => num * 2);

console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubledNumbers);
console.log("---");


// 2. .filter() - to get marks above 80
const marks = [78, 92, 56, 88, 99, 67];
const highScores = marks.filter(mark => mark > 80);

console.log("All marks:", marks);
console.log("High scores (above 80):", highScores);
console.log("---");


// 3. .reduce() - to get the sum of all marks
const totalMarks = marks.reduce((sum, currentMark) => sum + currentMark, 0);

console.log("Sum of all marks:", totalMarks);
