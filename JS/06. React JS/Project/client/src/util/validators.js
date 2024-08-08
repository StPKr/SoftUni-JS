
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

    if (values.title.length < 3) {
        errors.push('Title must be at least 3 characters long');
    }

    if (values.author.length < 3) {
        errors.push('Author must be at least 3 characters long');
    }

    if (values.genre.length < 3) {
        errors.push('Genre must be at least 3 characters long');
    }

    if (values.year < 1000 || values.year > new Date().getFullYear()) {
        errors.push('Year must be a valid year');
    }

    if (!/^https?:\/\/.+\.(jpg|jpeg|png|gif)$/.test(values.cover)) {
        errors.push('Cover image URL must be a valid URL ending with .jpg, .jpeg, .png, or .gif');
    }

    if (!/^\d{10}(\d{3})?$/.test(values.ISBN)) {
        errors.push('ISBN must be a valid 10 or 13 digit number');
    }

    if (values.summary.length < 10) {
        errors.push('Summary must be at least 10 characters long');
    }


    return errors;
}

export function commentValidator(values) {
    const errors = [];

    return errors;
}