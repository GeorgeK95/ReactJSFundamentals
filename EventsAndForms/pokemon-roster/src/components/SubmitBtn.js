import React, {Component} from 'react'

class SubmitBtn extends Component {
    render() {
        let doesFalseValueExists = !!Object.keys(this.props.obj).find(key => !this.props.obj[key])

        return (
            <input
                type='submit'
                className='submit-btn'
                disabled={doesFalseValueExists ? 'disabled' : ''}
                value={this.props.value}/>
        )
    }
}

export default SubmitBtn