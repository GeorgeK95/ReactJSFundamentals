import React, {Component} from 'react'
import PokemonForm from "./PokemonForm";

import Cookies from 'universal-cookie'
import Pokemon from "./Pokemon";

const cookies = new Cookies();

const API = 'http://localhost:5000/pokedex/pokedex';

class PokemonPage extends Component {
    constructor() {
        super();

        this.state = {
            pokemonCollection: []
        }

        // this.createPokemon = this.createPokemon.bind(this)
    }

    componentDidMount() {
        fetch(API, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Cookie': cookies.get('SID')
            }
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                for (let current of data) {
                    this.setState(prevState => ({
                        pokemonCollection: [...prevState.pokemonCollection, current]
                    }))
                }
            })
    }

    render() {
        return (
            <div>
                <PokemonForm reloadCollection={pokemonCollection =>
                    this.setState({pokemonCollection})
                }/>

                <div>
                    {this.state.pokemonCollection.map(
                        (p, i) => <Pokemon pokemon={p} key={i}/>)
                    }
                </div>
            </div>
        )
    }
}

export default PokemonPage