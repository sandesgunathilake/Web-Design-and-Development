function validateForm() {
    // Get form values
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value;
    const email = document.getElementById('email-address').value.trim();
    const gender = document.querySelector('input[name="Gender"]:checked');
    const course = document.getElementById('Course').value;
    const terms = document.getElementById('terms').checked;

    // Array to store errors
    const errors = [];

    // Validation Rules
    if (name === '') {
        errors.push('Please enter your name.');
    }

    if (age === '' || parseInt(age) < 18) {
        errors.push('Age must be 18 or above.');
    }

    if (email === '') {
        errors.push('Please enter your email.');
    }

    if (!gender) {
        errors.push('Please select gender.');
    }

    if (!terms) {
        errors.push('Please accept terms and conditions.');
    }

    // If there are errors, display them
    if (errors.length > 0) {
        alert(errors.join('\n'));
        return false;
    }

    // If all validations pass, display success message
    alert('Registration Successful!\nStudent Name: ' + name + 
          '\nAge: ' + age + 
          '\nEmail: ' + email + 
          '\nGender: ' + gender.value + 
          '\nCourse: ' + course);
    
    return false;
}