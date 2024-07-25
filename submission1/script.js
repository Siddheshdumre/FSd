document.getElementById('registration-form-1').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});

document.getElementById('password').addEventListener('input', function() {
    const strength = document.getElementById('password-strength');
    const value = this.value;
    if (value.length < 6) {
        strength.textContent = 'Weak';
        strength.style.color = 'red';
    } else if (value.length < 10) {
        strength.textContent = 'Moderate';
        strength.style.color = 'orange';
    } else {
        strength.textContent = 'Strong';
        strength.style.color = 'green';
    }
});

document.getElementById('confirm-password').addEventListener('input', function() {
    const match = document.getElementById('password-match');
    const password = document.getElementById('password').value;
    if (this.value !== password) {
        match.textContent = 'Passwords do not match';
        match.style.color = 'red';
    } else {
        match.textContent = '';
    }
});

document.getElementById('email').addEventListener('input', function() {
    const feedback = document.getElementById('email-feedback');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(this.value)) {
        feedback.textContent = 'Invalid email format';
        feedback.style.color = 'red';
    } else {
        feedback.textContent = '';
    }
});

document.getElementById('phone').addEventListener('input', function() {
    const feedback = document.getElementById('phone-feedback');
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(this.value)) {
        feedback.textContent = 'Invalid phone number';
        feedback.style.color = 'red';
    } else {
        feedback.textContent = '';
    }
});

document.getElementById('show-password').addEventListener('change', function() {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    if (this.checked) {
        password.type = 'text';
        confirmPassword.type = 'text';
    } else {
        password.type = 'password';
        confirmPassword.type = 'password';
    }
});

document.getElementById('next-button').addEventListener('click', function() {
    document.getElementById('form-step-1').style.display = 'none';
    document.getElementById('form-step-2').style.display = 'block';
});

document.getElementById('prev-button').addEventListener('click', function() {
    document.getElementById('form-step-2').style.display = 'none';
    document.getElementById('form-step-1').style.display = 'block';
});

document.getElementById('registration-form-2').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});
