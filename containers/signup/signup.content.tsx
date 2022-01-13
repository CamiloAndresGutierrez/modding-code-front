export const formFields = ({ ctaButton }) => ({
    headline: 'Sign up',
    subHeadline: `Already have an account? <a href="/login">Login</a>`,
    ctaText: `${ctaButton}`,

    fields: [
        {
            field: "name",
            type: "text",
            placeHolder: "Name",
        },
        {
            field: "email",
            type: "email",
            placeHolder: "E-mail",
        },
        {
            field: "password",
            type: "password",
            placeHolder: "Password",
        }],

})

export const userSelection = () => ({
    selectionHeadline: 'Are you a student or an expert?',
    student: 'Student',
    expert: 'Expert',
})

export const inputErrors = () => ({
    email: 'The e-mail format is not correct.',
    name: '',
    password: 'Password must contain a special character, upper and lower case letters, a number and at least 8 characters.',
    fields: 'All fields are required.',
})

export const expertProfBackground = () => ({
    expertHeadline: 'Tell us about your professional background',
})