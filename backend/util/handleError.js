export const handleError = (error) => {
    let errors = { email: '', password: '' }

    // monogoose validation
    if (error.message.includes('users validation failed')) {
        Object.values(error.errors).forEach((properties) => {
            errors[properties.path] = properties.message
        })
        return errors
    }
    // duplicate value
    if (error.code === 11000) {
        errors.email = 'that email is already registered'
        return errors
    }


    //invalid email
    if (error.message === 'incorrect email') {
        errors.email = 'Please enter a valid email address'
        return errors
    }

    //invalid password
    if (error.message === 'incorrect password') {
        errors.password = 'Please enter a valid password'
        return errors
    }
}