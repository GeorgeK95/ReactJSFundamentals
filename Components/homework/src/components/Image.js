import React, {Component} from 'react'

class Image extends Component {
    render() {
        return (
            <img alt='nope'
                 src={this.props.imgUrl}
                 width={this.props.width} height={this.props.height}
                 className={this.props.classNames}
                 onClick={this.props.onClickEvent}/>
        );
    }
}

export default Image;