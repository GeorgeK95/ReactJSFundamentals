import React, {Component} from 'react'

class Notification extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={this.props.type}>{this.props.message}</div>
        )
    }
}

export default Notification;