// marksCalculator.js
// Mini task: Calculate total marks for a student using .reduce()

const student = {
    name: "Vipin Tomar",
    marks: [
        { subject: "Maths", score: 92 },
        { subject: "Physics", score: 88 },
        { subject: "JavaScript", score: 95 },
        { subject: "AI", score: 90 }
    ]
};

// Use reduce to sum the scores from the array of objects
// The '0' is the initial value for our sum
const totalScore = student.marks.reduce((sum, subject) => sum + subject.score, 0);

console.log("Student:", student.name);
console.log("Total Marks:", totalScore);

// Also calculating the percentage (assuming max marks are 100 for each subject)
const percentage = (totalScore / (student.marks.length * 100)) * 100;
console.log("Percentage:", percentage.toFixed(2) + "%");
