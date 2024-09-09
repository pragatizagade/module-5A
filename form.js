

document.getElementById('S').addEventListener('submit', function(e) {
    e.preventDefault()
    let valid = true;

    const name = document.getElementById('name').value.trim();
    if (name === "") {
        showError('nameError', 'Please enter your name.');
        valid = false;
    } else {
        clearError('nameError');
    }

    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^[0-9]{10}$/; 
    if (phone === "") {
        showError('phoneError', 'Please enter your phone number.');
        valid = false;
    } else if (!phoneRegex.test(phone)) {
        showError('phoneError', 'Please enter a valid 10-digit phone number.');
        valid = false;
    } else {
        clearError('phoneError');
    }
    
    
    const email = document.getElementById('email').value.trim();
    const emailRegex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-z]{3}$/;
    if (email === "") {
        showError('emailError', 'Please enter your email.');
        valid = false;
    } else if (!emailRegex.test(email)) {
        showError('emailError', 'Please enter a valid email address.');
        valid = false;
    } else {
        clearError('emailError');
    }

    if (valid) {
        
        alert("Form successfuly submitted")
    }
});


function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.color = "red"; 
}
function clearError(elementId) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = '';
}

