import React, {Component} from 'react'

class ErrorMessage extends Component {
    render() {
        return (
            this.props.isValid ?
                <p className='error-msg'>{this.props.message}</p>
                :
                ''
        )
    }
}

export default ErrorMessage