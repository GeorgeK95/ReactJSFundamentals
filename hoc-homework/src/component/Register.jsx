import React, {Component} from 'react'
import dataProvider from '../util/dataProvider'

class Register extends Component {
    constructor() {
        super()

        this.dataProvider = (e) => {
            this.setState(dataProvider(e))
        }

        this.register = (e) => {
            e.preventDefault()

            console.log('Ready to send request to some server...')
        }
    }

    render() {
        return (
            <form onSubmit={(e) => {
                this.register(e)
            }}>
                Username:
                <input type="text"/><br/>
                Email:
                <input type="text"/><br/>
                Password:
                <input type="password"/><br/>
                Repeat Password:
                <input type="password"/><br/>
                <input type="submit" value="Register"/>
            </form>
        )
    }
}

export default Register