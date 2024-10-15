// Function to validate email format using a regular expression
function validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}

// Function to validate password requirements (e.g., at least 8 characters, one letter, one number)
function validatePassword(password: string): boolean {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordPattern.test(password);
}

// Function to check if the password and confirm password match
function validateConfirmPassword(password: string, confirmPassword: string): boolean {
    return password === confirmPassword;
}

// Handling form submission
const form = document.getElementById("formAuthentication") as HTMLFormElement;

form.addEventListener("submit", function (event) {
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const confirmPasswordInput = document.getElementById("confirm-password") as HTMLInputElement;

    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    let valid = true;

    // Validate email
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        emailInput.classList.add("is-invalid");
        valid = false;
    } else {
        emailInput.classList.remove("is-invalid");
    }

    // Validate password
    if (!validatePassword(password)) {
        alert("Password must be at least 8 characters long, contain at least one letter and one number.");
        passwordInput.classList.add("is-invalid");
        valid = false;
    } else {
        passwordInput.classList.remove("is-invalid");
    }

    // Validate confirm password
    if (!validateConfirmPassword(password, confirmPassword)) {
        alert("Passwords do not match.");
        confirmPasswordInput.classList.add("is-invalid");
        valid = false;
    } else {
        confirmPasswordInput.classList.remove("is-invalid");
    }

    // If form is invalid, prevent submission
    if (!valid) {
        event.preventDefault();
    }
});
