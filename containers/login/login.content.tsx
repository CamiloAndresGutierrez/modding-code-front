export const content = () => ({
    headline: "Login",
    subheadline: `Don't have an account? <a href="/signup">Sign up</a>`,
    fields: [
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
