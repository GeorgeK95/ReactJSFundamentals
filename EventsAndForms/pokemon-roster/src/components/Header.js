import React, {Component} from 'react'
import SignUpForm from './SingUpForm'
import LoginForm from "./LoginForm";
import PokemonPage from "./PokemonPage";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSignUpComponent: false,
            showPokemonComponent: false,
            showLogInComponent: false
        };

        this._onSignUpButtonClick = this._onSignUpButtonClick.bind(this);
        this._onLogInButtonClick = this._onLogInButtonClick.bind(this);
        this._onPokemonButtonClick = this._onPokemonButtonClick.bind(this);
    }

    _onSignUpButtonClick() {
        this.setState((prevState) => {
            return {
                showSignUpComponent: !prevState.showSignUpComponent,
                showPokemonComponent: false,
                showLogInComponent: false
            };
        });
    }

    _onLogInButtonClick() {
        this.setState((prevState) => {
            return {
                showSignUpComponent: false,
                showPokemonComponent: false,
                showLogInComponent: !prevState.showLogInComponent
            };
        });
    }

    _onPokemonButtonClick() {
        this.setState((prevState) => {
            return {
                showSignUpComponent: false,
                showLogInComponent: false,
                showPokemonComponent: !prevState.showPokemonComponent
            };
        });
    }

    render() {
        return (
            <div>
                <ul>
                    <li><a onClick={this._onSignUpButtonClick}>SignUp</a></li>
                    <li><a onClick={this._onLogInButtonClick}>Login</a></li>
                    <li><a onClick={this._onPokemonButtonClick}>Pokemon Page</a></li>
                </ul>

                {this.state.showSignUpComponent ?
                    <SignUpForm/> :
                    null
                }
                {this.state.showLogInComponent ?
                    <LoginForm/> :
                    null
                }
                {this.state.showPokemonComponent ?
                    <PokemonPage/> :
                    null
                }
            </div>
        )
    }
}

export default Header