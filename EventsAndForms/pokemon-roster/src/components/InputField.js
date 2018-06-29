import React, {Component} from 'react'

class InputField extends Component {
    render() {
        return (
            <input
                type={this.props.type}
                className={this.props.className}
                value={this.props.value}
                onChange={(e) => this.props.func(e)}/>
        )
    }
}

export default InputField