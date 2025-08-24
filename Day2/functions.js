// functions.js
// Learning functions and conditionals

function greetStudent(name, marks) {
    if (marks >= 85) {
        console.log("Hello " + name + "! 🎉 You did excellent with marks:", marks);
    } else if (marks >= 50) {
        console.log("Hello " + name + "! 🙂 You passed with marks:", marks);
    } else {
        console.log("Hello " + name + "! 😢 You need to improve. Marks:", marks);
    }
}

greetStudent("Vipin Tomar", 92);
greetStudent("Rahul", 67);
greetStudent("Neha", 40);
