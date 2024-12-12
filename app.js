let currentStep = 0;
const steps = document.querySelectorAll('.step');
const reviewDetails = document.getElementById('review-details');

function nextStep(step) {
    if (validateStep(step)) {
        currentStep = step;
        updateStepVisibility();
        updateReviewDetails();
    }
}

function validateStep(step) {
    switch (step) {
        case 1:
            const emailMobile = document.getElementById('emailMobile').value;
            if (!emailMobile) {
                alert('Please enter a valid email or mobile number');
                return false;
            }
            break;
        case 2:
            const password = document.getElementById('password').value;
            if (!password) {
                alert('Please enter your password');
                return false;
            }
            break;
        case 3:
            const dp = document.getElementById('dp').files.length;
            if (dp === 0) {
                const profile = document.getElementById('profile-placeholder');
                profile.textContent = "OK"; // Show "OK" as placeholder.
            }
            break;
        case 4:
            const accountType = document.getElementById('account-type').value;
            if (!accountType) {
                alert('Please select an account type');
                return false;
            }
            break;
        case 5:
            const dob = document.getElementById('dob').value;
            if (!dob) {
                alert('Please enter your date of birth');
                return false;
            }
            break;
    }
    return true;
}

function updateStepVisibility() {
    steps.forEach((step, index) => {
        if (index === currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

function updateReviewDetails() {
    reviewDetails.innerHTML = `
        <p>Email/Phone: ${document.getElementById('emailMobile').value}</p>
        <p>Account Type: ${document.getElementById('account-type').value}</p>
        <p>Date of Birth: ${document.getElementById('dob').value}</p>
        <p>Profile Picture: ${document.getElementById('dp').files.length > 0 ? 'Uploaded' : 'Not Uploaded'}</p>
    `;
}

function submitForm() {
    const emailMobile = document.getElementById('emailMobile').value;
    const password = document.getElementById('password').value;
    const accountType = document.getElementById('account-type').value;
    const dob = document.getElementById('dob').value;

    // Simulate submission
    console.log('Form Submitted', { emailMobile, password, accountType, dob });
    
    // Generate Navsara ID
    const navsaraId = `${dob.replace(/-/g, '')}${emailMobile.replace(/[^a-zA-Z0-9]/g, '')}@navsara.dev`;
    alert(`Your Navsara ID: ${navsaraId}`);

    // Redirect to abc.xyz in a new window
    window.open('https://abc.xyz', '_blank');
}
