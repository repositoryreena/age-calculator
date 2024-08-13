// Variables
const dateInput = document.getElementById('date');
const ageSpan = document.querySelector('h2 span');
const btn = document.querySelector('.btn');

// Function to calculate age from the birth date
function calculateAge() {
    // Get the inputted birth date
    const birthDateInput = dateInput.value;

    // Check if input is provided
    if (!birthDateInput) {
        alert("Please enter a valid date of birth.");
        return;
    }

    // Parse the input date
    const birthDate = new Date(birthDateInput);

    // Get the current date
    const today = new Date();

    // Calculate the age
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if birth date hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Update the displayed result
    ageSpan.innerText = age;
}

// Event listener for the button click
btn.addEventListener('click', calculateAge);
