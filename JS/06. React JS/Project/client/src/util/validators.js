
export function registerValidator(values) {
    const errors = [];

    if (values.username.length < 3) {
        errors.push('Username must be at least 3 characters long');
    }

    if (values.email.length < 10) {
        errors.push('Email must be at least 10 characters long');
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.push('Email address is invalid');
    }

    if (!values.password) {
        errors.push('Password is required');
    } else if (values.password.length < 6) {
        errors.push('Password must be at least 6 characters');
    }

    if (values.password !== values.repass) {
        errors.push('Passwords do not match');
    }

    return errors;
}

export function loginValidator(values) {
    const errors = [];

    return errors;
}

export function createBookValidator(values) {
    const errors = [];

    return errors;
}