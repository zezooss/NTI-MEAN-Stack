// 1. IIFE Alert on page load
(function () {
    alert("Welcome to my site");
})();

// 2. Prompt for user name & greeting
const userName = prompt("Please enter your name:") || "Guest";
console.log(`Welcome ${userName}!`);

// 3. 2D array of student marks (Rows = Classes, Columns = Marks)
const studentMarks = [
    [80, 75, 85, 80], // Class 1
    [90, 95, 92, 91], // Class 2
    [60, 55, 65, 50], // Class 3
    [40, 45, 30, 42]  // Class 4
];

// 4, 5 & 6. Calculate Average, Grade using Switch, and Print
studentMarks.forEach((classMarks, index) => {
    // Calculate average
    const total = classMarks.reduce((sum, mark) => sum + mark, 0);
    const average = total / classMarks.length;

    // Determine grade using switch statement
    let grade = '';
    switch (true) {
        case (average >= 85):
            grade = 'A';
            break;
        case (average >= 70 && average < 85):
            grade = 'B';
            break;
        case (average >= 50 && average < 70):
            grade = 'C';
            break;
        default:
            grade = 'F';
    }

    // Print result
    console.log(`Class ${index + 1} average = ${average} → Grade = ${grade}`);
});