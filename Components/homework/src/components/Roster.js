import React, {Component} from 'react'
import Image from "./Image";
import Details from "./Details";

const API = 'http://localhost:9999/roster';

class Roster extends Component {
    constructor() {
        super()

        this.state = {
            images: [],
            selectedImage: false
        };

        this.showImageDetails = (image) => {
            let oldImage = this.state.selectedImage;

            if (oldImage.id === image.id) {
                this.setState({selectedImage: false});
                return;
            }

            this.setState({selectedImage: image})
        };

    }

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({images: data}));
    }


    render() {
        const {images} = this.state;

        return (
            <div className='roster-menu'>
                {images.map((image, index) =>
                    <Image key={index}
                           imgUrl={image.url}
                           classNames='roster-img border-3'
                           weight='200px'
                           height='200px'
                           onClickEvent={() => this.showImageDetails(image)}
                    />
                )}
                {this.state.selectedImage ? <Details clicked_img={this.state.selectedImage}/> : null}
            </div>
        )
    }
}

export default Roster