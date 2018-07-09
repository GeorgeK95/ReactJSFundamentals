import React, {Component} from 'react'
import dataProvider from '../../utils/dataProvider'
import reqHandler from './../../utils/reqHandler'

class Register extends Component {
    constructor() {
        super()

        this.dataProvider = (e) => {
            this.setState(dataProvider(e))
        }

        this.register = (e) => {
            e.preventDefault()

            reqHandler.signUp(this.state).then(response => {
                console.log(response)
            })
        }
    }

    render() {
        return (
            <form id="registerForm" onSubmit={(e) => {
                this.register(e)
            }}>
                <h2>Register</h2>
                <label>Username:</label>
                <input onChange={(e) => {
                    this.dataProvider(e)
                }} name="username" type="text"/>
                <label>Password:</label>
                <input onChange={(e) => {
                    this.dataProvider(e)
                }} name="password" type="password"/>
                <label>Repeat Password:</label>
                <input onChange={(e) => {
                    this.dataProvider(e)
                }} name="repeatPass" type="password"/>
                <input onChange={(e) => {
                    this.dataProvider(e)
                }} id="btnRegister" value="Sign Up" type="submit"/>
            </form>
        )
    }
}

export default Register


