function calculateGrade() {
    // Get the input value from the form
    const marks = parseFloat(document.getElementById("marks").value);

    // Check if the input is a valid number
    if (isNaN(marks) || marks < 0 || marks > 100) {
        document.getElementById("result").textContent = "Invalid input. Please enter a number between 0 and 100.";
    } else {
        // Calculate the grade based on the marks
        let grade = '';
        if (marks > 79) {
            grade = 'A';
        } else if (marks >= 60) {
            grade = 'B';
        } else if (marks >= 50) {
            grade = 'C';
        } else if (marks >= 40) {
            grade = 'D';
        } else {
            grade = 'E';
        }

        // Display the result in the HTML
        document.getElementById("result").textContent = grade;
    }
}