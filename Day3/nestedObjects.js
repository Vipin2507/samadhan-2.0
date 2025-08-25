// nestedObjects.js
// Learning to access data in nested objects

const studentProfile = {
    name: "Vipin Tomar",
    college: "SISTec Bhopal",
    contact: {
        email: "vipin.tomar@example.com",
        phone: "123-456-7890"
    },
    address: {
        city: "Bhopal",
        state: "Madhya Pradesh",
    }
};

// Accessing nested data
console.log("Student Name:", studentProfile.name);
console.log("Email:", studentProfile.contact.email);
console.log("City:", studentProfile.address.city);
