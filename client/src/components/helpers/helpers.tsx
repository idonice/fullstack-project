const validateInputs = (accountDetails: { name: string, email: string, password: string, password2: string }): string | null => {
    const { name, email, password, password2 } = accountDetails;

    // Check if passwords match
    if (password !== password2) {
        return 'Passwords do not match';
    }

    // Check password length and pattern
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
    if (!passwordPattern.test(password)) {
        return 'Password must be 8-16 characters and contain letters and numbers';
    }

    // Check email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return 'Invalid email address';
    }

    // Check if name is not empty and contains only letters
    const namePattern = /^[a-zA-Z\s]+$/;
    if (!name || !namePattern.test(name)) {
        return 'Name must not be empty and should contain only letters';
    }

    // All validations passed
    return null;
};

export default validateInputs;