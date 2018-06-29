const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let loginValidationFunc = (
    mail,
    password
) => {
    let validMail = (() => {
        let mailRegex = new RegExp(EMAIL_REGEX)
        let testMail = mailRegex.test(String(mail).toLowerCase())

        return testMail && mail !== '';
    })()

    let validPassword = (() => {
        return password.length > 7 &&
            password !== ''
    })()

    return {
        validMail,
        validPassword
    }
}

export default loginValidationFunc
