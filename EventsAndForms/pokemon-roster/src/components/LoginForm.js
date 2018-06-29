import React, {Component} from 'react'
import Cookies from 'universal-cookie';

import loginValidationFunc from "./LoginValidator";
import InputField from "./InputField";
import ErrorMessage from "./ErrorMessage";
import ValidationTick from "./ValidationTick";
import SubmitBtn from "./SubmitBtn";

const API = 'http://localhost:5000/auth/login';

const EMAIL_MESSAGE = 'Please provide a correct email address.'
const PASSWORD_MESSAGE = 'Password must have at least 8 characters.'

const cookies = new Cookies();

class LoginForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
        }

        this.submitLogin = this.submitLogin.bind(this)
    }

    submitLogin(e) {
        e.preventDefault();

        let validObj = loginValidationFunc(
            this.state.email,
            this.state.password
        )

        if (!!Object.keys(validObj).find(key => !validObj[key])) return

        let userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.login(userData)
    }

    login(userData) {
        fetch(API, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                cookies.set('SID', data.token, {path: '/'});
            })
    }

    render() {
        let validObj = loginValidationFunc(
            this.state.email,
            this.state.password
        )

        return (
            <form onSubmit={this.submitLogin}>
                <fieldset className='App'>
                    <div style={{display: 'inline-grid'}}>
                        <h2>Log In</h2>
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

                        <SubmitBtn obj={validObj} value='Log In'/>
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default LoginForm