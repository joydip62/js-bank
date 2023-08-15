// add click event handler with submit btn
document.getElementById("btn-submit").addEventListener('click', function (event) {
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
    
    // get password

    const passwordFiled = document.getElementById("user-password");
    const password = passwordFiled.value;
    
    // verify email pass
    if (email === 'joy@gmail.com' && password === 'secret') {
        location.href = 'bank.html'
    } else {
        alert('invalid user');
    }
});