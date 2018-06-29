import React, {Component} from 'react'

class Pokemon extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='pokemon'>
                <img src={this.props.pokemon.image} className='pokemon-img'/>
            </div>
        )
    }
}

export default Pokemon