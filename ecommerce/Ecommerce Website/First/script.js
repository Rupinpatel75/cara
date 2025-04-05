function showRegistrationForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registrationForm').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

document.getElementById('registerUserType').addEventListener('change', function() {
    const sellerFields = document.getElementById('sellerFields');
    if (this.value === 'seller') {
        sellerFields.style.display = 'block';
    } else {
        sellerFields.style.display = 'none';
    }
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Perform login validation
    alert('Login form submitted');
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Perform registration validation
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password === confirmPassword) {
        alert('Registration form submitted');
    } else {
        alert('Passwords do not match');
    }
});
