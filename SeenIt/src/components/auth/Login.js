import React, {Component} from 'react'

import dataProvider from '../../utils/dataProvider'
import reqHandler from '../../utils/reqHandler'
import Notification from "../common/Notification";

const TOKEN = 'token';
const USERNAME = 'username';
const GREETING = 'greeting';
const SLASH = '/';

class Login extends Component {
    constructor() {
        super()

        this.state = {
            response: {},
            redirect: false
        }

        this.dataProvider = (e) => {
            this.setState(dataProvider(e))
        }

        this.Login = (e) => {
            e.preventDefault()

            this.setState({loading: true})

            reqHandler.signIn(this.state).then(response => {
                this.setState({loading: false, response})

                if (response.error) return

                localStorage.setItem(TOKEN, response._kmd.authtoken)
                localStorage.setItem(USERNAME, response.username)

                window.location.replace(SLASH)
            })
        }
    }


    render() {
        let notify = <Notification type='notify-err' message={this.state.response.error}/>;

        return (
            <div>
                {notify}
                <form id="loginForm" onSubmit={(e) => {
                    this.Login(e)
                }}>

                    <h2>Sign In</h2>
                    <label>Username:</label>
                    <input onChange={(e) => {
                        this.dataProvider(e)
                    }} name="username" type="text"/>
                    <label>Password:</label>
                    <input onChange={(e) => {
                        this.dataProvider(e)
                    }} name="password" type="password"/>
                    <input id="btnLogin" value="Sign In" type="submit"/>
                </form>
            </div>
        )
    }
}

export default Login