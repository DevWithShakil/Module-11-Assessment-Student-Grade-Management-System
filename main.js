let showMessage = false;
do {
    console.log("Welcome to the Student Grade Management System");
    showMessage = true;
} while (!showMessage);

//Student Data Structure
let students = []; // Array of {name, marks, grade}

//Function to Calculate Grade
function calculateGrade(marks) {
    if (marks >= 80) return "A+";
    else if (marks >= 70) return "A";
    else if (marks >= 60) return "B";
    else if (marks >= 50) return "C";
    else if (marks >= 40) return "D";
    else return "F";
}

// Input Students
function addStudent(name, marks) {
    let grade = calculateGrade(marks);
    students.push({ name, marks, grade });
}

//Display Student List (for loop)
function displayStudents() {
    console.log("\nStudent List:");
    for (let i = 0; i < students.length; i++) {
        console.log(`${i + 1}. ${students[i].name} | Marks: ${students[i].marks} | Grade: ${students[i].grade}`);
    }
}

//Delete Failed Students (anonymous function + filter)
function deleteFailedStudents() {
    students = students.filter(function (student) {
        return student.grade !== "F";
    });
    console.log("\nFailed students removed from the list.");
}

//View Student Details (switch-case)
function viewStudentDetails(option) {
    switch (option) {
        case 1: // First Position
            let topper = students.reduce((prev, current) => (prev.marks > current.marks) ? prev : current);
            console.log(`\nFirst Position: ${topper.name}, Marks: ${topper.marks}, Grade: ${topper.grade}`);
            break;

        case 2: // Passed Students
            console.log("\nPassed Students:");
            for (let student of students) {
                if (student.grade !== "F") {
                    console.log(`${student.name} | Marks: ${student.marks} | Grade: ${student.grade}`);
                }
            }
            break;

        default:
            console.log("\nInvalid option!");
    }
}

//Total + Average Marks (while loop + arrow function)
const calculateTotalAndAverage = () => {
    let i = 0, total = 0;
    while (i < students.length) {
        total += students[i].marks;
        i++;
    }
    let avg = (students.length > 0) ? (total / students.length).toFixed(2) : 0;
    console.log(`\nTotal Marks: ${total}, Average Marks: ${avg}`);
};

// Example Run



// Show All Students
displayStudents();

// View First Position
viewStudentDetails(1);

// View Passed Students
viewStudentDetails(2);

// Delete Failed Students
deleteFailedStudents();

// Show Updated List
displayStudents();

// Show Total and Average
calculateTotalAndAverage();
