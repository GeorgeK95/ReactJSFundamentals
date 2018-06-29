import React, {Component} from 'react'

import pokemonValidationFunc from "./PokemonValidator";
import InputField from "./InputField";
import ErrorMessage from "./ErrorMessage";
import ValidationTick from "./ValidationTick";
import SubmitBtn from "./SubmitBtn";
import Cookies from 'universal-cookie'
import Message from "./Message";

const API = 'http://localhost:5000/pokedex/create';

const NAME_MESSAGE = 'Please provide correct pokemon name.'
const IMAGE_MESSAGE = 'Please provide correct image url.'
const INFO_MESSAGE = 'Please provide some info.'

const SUCCESSFULLY_ADDED_MESSAGE = 'Pokemon added successfully.'

const cookies = new Cookies();

class PokemonForm extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            image: '',
            info: '',
            successfullyAdded: false
        }

        this.createPokemon = this.createPokemon.bind(this)
    }

    createPokemon(e) {
        e.preventDefault();

        let validObj = pokemonValidationFunc(
            this.state.name,
            this.state.image,
            this.state.info,
        )

        if (!!Object.keys(validObj).find(key => !validObj[key])) return

        let pokemonData = {
            name: this.state.name,
            image: this.state.image,
            info: this.state.info
        };

        this.sendPokemonToServer(pokemonData)
    }

    sendPokemonToServer(pokemonData) {
        fetch(API, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Cookie': cookies.get('SID')
            },
            body: JSON.stringify(pokemonData)
        })
            .then(res => {
                this.setState({
                    successfullyAdded: true
                })

                return res.json()
            })
            .then(data => {
                this.props.reloadCollection(data.pokemonCollection)
            })
    }

    render() {
        let validObj = pokemonValidationFunc(
            this.state.name,
            this.state.image,
            this.state.info
        )

        return (
            <form onSubmit={this.createPokemon}>
                <fieldset className='App'>
                    <div style={{display: 'inline-grid'}}>

                        <Message isValid={this.state.successfullyAdded} message={SUCCESSFULLY_ADDED_MESSAGE}/>

                        <h2>Create Pokemon Form</h2>
                        <label>Pokemon Name:</label>
                        <div>
                            <InputField type='text'
                                        value={this.state.name}
                                        isValid={validObj.validName}
                                        func={e => {
                                            this.setState({name: e.target.value})
                                        }}/>
                            <ValidationTick isValid={validObj.validName}/>
                            <ErrorMessage isValid={!validObj.validName} message={NAME_MESSAGE}/>
                        </div>

                        <label>Pokemon Image:</label>
                        <div>
                            <InputField type='text'
                                        value={this.state.image}
                                        isValid={validObj.validImage}
                                        func={e => {
                                            this.setState({image: e.target.value})
                                        }}/>
                            <ValidationTick isValid={validObj.validImage}/>
                            <ErrorMessage isValid={!validObj.validImage} message={IMAGE_MESSAGE}/>
                        </div>

                        <label>Pokemon Info:</label>
                        <div>
                            <InputField type='text'
                                        value={this.state.info}
                                        isValid={validObj.validInfo}
                                        func={e => {
                                            this.setState({info: e.target.value})
                                        }}/>
                            <ValidationTick isValid={validObj.validInfo}/>
                            <ErrorMessage isValid={!validObj.validInfo} message={INFO_MESSAGE}/>
                        </div>

                        <SubmitBtn value='Create Pokemon' obj={validObj}/>
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default PokemonForm