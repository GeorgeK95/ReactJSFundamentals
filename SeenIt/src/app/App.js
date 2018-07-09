import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';

import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import GuestHome from '../components/auth/Home'
import Wrapper from '../components/common/LoggedWrapper'

const TOKEN = 'token';

class App extends Component {
    constructor() {
        super()

        this.state = {
            token: ''
        }
    }

    componentDidMount() {
        if (localStorage.getItem(TOKEN)) {
            this.setState({token: localStorage.getItem(TOKEN)})
        }
    }


    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>

                    {this.state.token === '' ? <GuestHome/> : <Wrapper/>}

                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
