// Function to validate email format
function validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// Function to validate password requirements (example: min 8 characters, at least one letter, one number)
function validatePassword(password: string): boolean {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 characters, one letter, one number
    return passwordPattern.test(password);
}

// Handling form submission
const form = document.getElementById("formAuthentication") as HTMLFormElement;

form.addEventListener("submit", function (event) {
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;

    const email = emailInput.value;
    const password = passwordInput.value;

    // Validate email or username (assuming you only validate emails, not usernames)
    if (!validateEmail(email)) {
        event.preventDefault(); // Prevent form from submitting if email is invalid
        alert("Please enter a valid email address.");
        emailInput.classList.add("is-invalid");
    } else {
        emailInput.classList.remove("is-invalid");
    }

    // Validate password (must meet strength requirements)
    if (!validatePassword(password)) {
        event.preventDefault(); // Prevent form from submitting if password is invalid
        alert("Password must be at least 8 characters long, contain at least one letter and one number.");
        passwordInput.classList.add("is-invalid");
    } else {
        passwordInput.classList.remove("is-invalid");
    }
});
