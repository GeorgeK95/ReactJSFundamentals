import React, {Component} from 'react'

const SLASH = '/';

class Header extends Component {
    constructor() {
        super()

        this.Logout = (e) => {
            e.preventDefault()
            localStorage.clear();
            window.location.replace(SLASH)
        }
    }

    render() {
        return (
            <header>
                <span className="logo">☃</span><span className="header">SeenIt</span>
                {localStorage.getItem('username') ?
                    <div id="profile"><span>{localStorage.getItem('username')}</span>|<a href="" onClick={(e) => {
                        this.Logout(e)
                    }}>logout</a></div> : ""}

            </header>
        )
    }
}

export default Header
