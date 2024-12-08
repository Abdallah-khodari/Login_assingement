Sign-Up and Login System
This project implements a basic Sign-Up and Login System using HTML, CSS, JavaScript, and localStorage for data persistence. The goal is to allow users to create an account, log in, and be redirected to a welcome page if the login is successful. The project includes client-side validation for user inputs and utilizes the SweetAlert library for better user feedback.

Features
1. Sign-Up Functionality
Users can register by providing their name, email, and password.
Validations include:
Email: Must follow a standard email format.
Password: Minimum eight characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.
Name: Cannot be empty.
Checks for duplicate email addresses to prevent re-registration with the same email.
Displays success or error messages using SweetAlert.
2. Login Functionality
Users can log in with their registered email and password.
Verifies user credentials against stored data in localStorage.
If login is successful:
Stores the username in localStorage under the key fixedname.
Redirects the user to a welcome.html page.
Displays appropriate error messages for invalid login attempts.
3. LocalStorage for Data Persistence
User details are stored in localStorage under the key details.
This enables persistent data across sessions until manually cleared by the user.
