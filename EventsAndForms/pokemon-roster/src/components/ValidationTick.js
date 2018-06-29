import React, {Component} from 'react'

class ValidationTick extends Component {
    render() {
        return (
            this.props.isValid ?
                <span role="img" aria-label="valid" style={{
                    'marginLeft': '-23px'
                }}>
        ✅
            </span>
                :
                <span role='img' aria-label='invalid' style={{
                    marginLeft: '-23px'
                }}>
        ❌
             </span>
        )
    }
}

export default ValidationTick