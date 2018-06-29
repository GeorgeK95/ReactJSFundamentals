const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// const ALREADY_TAKEN_EMAILS = ['a@abv.bg']

let signUpValidationFunc = (
    mail,
    confirmMail,
    username,
    password,
    confirmPassword,
    agreeWithTerms
) => {
    let validMail = (() => {
        let mailRegex = new RegExp(EMAIL_REGEX)
        let testMail = mailRegex.test(String(mail).toLowerCase())

        return testMail && mail === confirmMail && mail !== '';
    })()

    let validName = (() => {
        return username !== '' && username.length > 4;
    })()

    let validPassword = (() => {
        return password.length > 7 &&
            password !== '' &&
            password === confirmPassword;
    })()

    let agreementAccepted = (() => {
        return agreeWithTerms === true;
    })()

    return {
        validMail,
        validName,
        validPassword,
        agreementAccepted
    }
}

export default signUpValidationFunc
