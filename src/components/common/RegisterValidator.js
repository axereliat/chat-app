export const registerValidator = payload => {
    return new Promise((resolve, reject) => {
        const errors = {};
        if (!payload.username) {
            errors.username = 'Username is required';
        }
        if (!payload.email) {
            errors.email = 'E-mail is required';
        }
        if (!payload.password) {
            errors.password = 'Password is required';
        }
        if (!payload.confirmPassword) {
            errors.confirmPassword = 'Confirm password is required';
        }
        if (payload.password !== payload.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }

        (Object.keys(errors).length > 0) ? reject(errors) : resolve(payload)
    })
};