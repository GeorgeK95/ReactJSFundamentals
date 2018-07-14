import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Article from "./component/Article";
import Register from "./component/Register";
import Navi from "./component/Navi";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Article/>
                <Register/>
                <Navi/>
            </div>
        );
    }
}

export default App;
