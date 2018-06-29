import React, {Component} from 'react'

class Message extends Component {
    render() {
        return (
            this.props.isValid ?
                <p className='success-msg'>{this.props.message}</p>
                :
                ''
        )
    }
}

export default Message