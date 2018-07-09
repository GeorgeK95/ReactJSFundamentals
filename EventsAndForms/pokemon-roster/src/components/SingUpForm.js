import React, {Component} from 'react'
import InputField from './InputField'
import validationFunc from './SignUpValidator'
import ValidationTick from './ValidationTick'
import ErrorMessage from "./ErrorMessage";
import SubmitBtn from "./SubmitBtn";
import Message from "./Message";

    const API = 'http://localhost:5000/auth/signup';

    const EMAIL_MESSAGE = 'Please provide a correct email address.'
    const CONFIRM_EMAIL_MESSAGE = 'Please, confirm your email.'
    const PASSWORD_MESSAGE = 'Password must have at least 8 characters.'
    const CONFIRM_PASSWORD_MESSAGE = 'Please, confirm your password.'
    const NAME_MESSAGE = 'Please provide your name.'
    const TERMS_MESSAGE = 'Please accept our terms.'

    const SUCCESSFULLY_REGISTERED_MESSAGE = 'Successfully registered!'

class SingUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            confirmEmail: '',
            userName: '',
            password: '',
            confirmPassword: '',
            successfullyRegistered: false,
            agreeWithTerms: false
        }

        this.submitRegister = this.submitRegister.bind(this)
    }

    submitRegister(e) {
        e.preventDefault();

        let validObj = validationFunc(
            this.state.email,
            this.state.confirmEmail,
            this.state.userName,
            this.state.password,
            this.state.confirmPassword,
            this.state.agreeWithTerms
        )

        if (!!Object.keys(validObj).find(key => !validObj[key])) return

        let userData = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.userName
        };

        this.signup(userData)
    }

    signup(payload) {
        fetch(API, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => {
                return res.json()
            })
            .then(d => {
                this.setState({
                    successfullyRegistered: true
                })
            })
    }

    render() {
        let validObj = validationFunc(
            this.state.email,
            this.state.confirmEmail,
            this.state.userName,
            this.state.password,
            this.state.confirmPassword,
            this.state.agreeWithTerms
        )

        return (
            <form onSubmit={this.submitRegister}>
                <fieldset className='App'>
                    <div style={{display: 'inline-grid'}}>

                        <Message isValid={this.state.successfullyRegistered} message={SUCCESSFULLY_REGISTERED_MESSAGE}/>

                        <h2>Sign Up</h2>
                        <label>Email:</label>
                        <div>
                            <InputField type='text'
                                        value={this.state.email}
                                        isValid={validObj.validMail}
                                        func={e => {
                                            this.setState({email: e.target.value})
                                        }}/>
                            <ValidationTick isValid={validObj.validMail}/>
                            <ErrorMessage isValid={!validObj.validMail} message={EMAIL_MESSAGE}/>
                        </div>
                        <label>Confirm Email:</label>
                        <div>
                            <InputField type='text'
                                        value={this.state.confirmEmail}
                                        isValid={validObj.validMail}
                                        func={e => {
                                            this.setState({confirmEmail: e.target.value})
                                        }}/>
                            <ErrorMessage isValid={!validObj.validMail} message={CONFIRM_EMAIL_MESSAGE}/>
                        </div>
                        <label>Username:</label>
                        <div>
                            <InputField type='text'
                                        value={this.state.userName}
                                        isValid={validObj.validName}
                                        func={e => {
                                            this.setState({userName: e.target.value})
                                        }}/>
                            <ValidationTick isValid={validObj.validName}/>
                            <ErrorMessage isValid={!validObj.validName} message={NAME_MESSAGE}/>
                        </div>
                        <label>Password:</label>
                        <div>
                            <InputField type='text'
                                        value={this.state.password}
                                        isValid={validObj.validPassword}
                                        func={e => {
                                            this.setState({password: e.target.value})
                                        }}/>
                            <ValidationTick isValid={validObj.validPassword}/>
                            <ErrorMessage isValid={!validObj.validPassword} message={PASSWORD_MESSAGE}/>
                        </div>
                        <label>Confirm Password:</label>
                        <div>
                            <InputField type='text'
                                        value={this.state.confirmPassword}
                                        isValid={validObj.validPassword}
                                        func={e => {
                                            this.setState({confirmPassword: e.target.value})
                                        }}/>
                            <ErrorMessage isValid={!validObj.validPassword} message={CONFIRM_PASSWORD_MESSAGE}/>
                        </div>
                        <div>
                            <input style={{marginTop: 20}}
                                   onChange={() => {
                                       this.setState({
                                           agreeWithTerms: !this.state.agreeWithTerms
                                       })
                                   }}
                                   id='checkBox'
                                   type='checkbox'
                            />
                            <label htmlFor='checkBox'>I agree with the terms</label>
                            <ErrorMessage isValid={!validObj.agreementAccepted} message={TERMS_MESSAGE}/>
                        </div>

                        <SubmitBtn obj={validObj} value='Sign Up'/>
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default SingUpForm
