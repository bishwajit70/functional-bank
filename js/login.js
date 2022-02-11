document.getElementById('login-btn').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    // User input check 
    if (userEmail == 'sontan@gmail.com' && userPassword == 'secret') {
        window.location.href = "banking.html"
    } else {
        alert("Please input correct information");
    }
});