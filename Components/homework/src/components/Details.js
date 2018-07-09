import React, {Component} from 'react'
import Image from "./Image";

class Details extends Component {
    render() {
        return (
            <div className='details'>
                <Image imgUrl={this.props.clicked_img.url} width='200px' height='200px'/>
                {this.props.clicked_img.bio}
            </div>
        );
    }
}

export default Details;