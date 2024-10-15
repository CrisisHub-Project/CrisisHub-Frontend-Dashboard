// Function to validate email format using a RegEx pattern
function validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// Handling form submission
const form = document.getElementById("formAuthentication") as HTMLFormElement;

form.addEventListener("submit", function (event) {
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const email = emailInput.value;

    if (!validateEmail(email)) {
        event.preventDefault(); // Prevent form from submitting if email is invalid
        alert("Please enter a valid email address.");
        emailInput.classList.add("is-invalid"); // Add Bootstrap's invalid class to highlight error
    } else {
        emailInput.classList.remove("is-invalid");
    }
});
