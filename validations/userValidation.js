const validateRegistration = (userData) => {
    const errors = [];

    // Sanitize inputs
    const username = userData.username ? userData.username.trim() : "";
    const password = userData.password ? userData.password.trim() : "";
    const confirm_password = userData.confirm_password ? userData.confirm_password.trim() : "";

    // Validate username/email
    if (typeof username !== "string" || !username) {
        errors.push("Username or email is required.");
    } else {
        // Check if input is an email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmail = emailRegex.test(username);
        
        if (isEmail) {
            // Email validation
            if (username.length > 254) errors.push("Email is too long.");
            if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(username)) {
                errors.push("Please enter a valid email address.");
            }
        } else {
            // Username validation
            if (username.length < 3) errors.push("Username must be at least 3 characters long.");
            if (username.length > 20) errors.push("Username must be less than 20 characters long.");
            if (/[^\w]/.test(username)) errors.push("Username can only contain letters, numbers, and underscores.");
        }
    }

    // Validate password
    if (typeof password !== "string" || !password) {
        errors.push("Password is required.");
    } else {
        if (password.length < 8) errors.push("Password must be at least 8 characters long.");
        if (password.length > 20) errors.push("Password must be less than 20 characters long.");
        if (/\s/.test(password)) errors.push("Password cannot contain spaces.");
    }

    // Validate password confirmation
    if (password !== confirm_password) {
        errors.push("Passwords do not match.");
    }

    return {
        isValid: errors.length === 0,
        errors,
        sanitizedData: {
            username,
            password,
            confirm_password,
            isEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)
        }
    };
};

const validateLogin = (userData) => {
    const errors = [];

    // Sanitize inputs
    const username = userData.username ? userData.username.trim() : "";
    const password = userData.password ? userData.password.trim() : "";

    // Validate username/email
    if (typeof username !== "string" || !username) {
        errors.push("Username or email is required.");
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmail = emailRegex.test(username);
        
        if (isEmail) {
            // Basic email format validation
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)) {
                errors.push("Please enter a valid email address.");
            }
        } else {
            // Basic username validation
            if (username.length < 3) {
                errors.push("Username must be at least 3 characters long.");
            }
        }
    }

    // Validate password
    if (typeof password !== "string" || !password) {
        errors.push("Password is required.");
    } else if (password.length < 1) {
        errors.push("Please enter your password.");
    }

    return {
        isValid: errors.length === 0,
        errors,
        sanitizedData: {
            username,
            password,
            isEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)
        }
    };
};

module.exports = {
    validateRegistration,
    validateLogin
};
