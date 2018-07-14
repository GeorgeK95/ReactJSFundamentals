import React, {Component} from 'react'

class Navi extends Component {
    render() {
        return (
            <nav>
                <header><span className="title">Navigation</span></header>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Catalog</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navi