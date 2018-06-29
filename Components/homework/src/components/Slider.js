import React, {Component} from 'react'
import Image from './Image'

import left from '../resources/left.png'
import right from '../resources/right.png'

const API = 'http://localhost:9999/episodePreview/';

class Slider extends Component {
    constructor() {
        super()

        this.state = {
            selectedImg: ''
        };
    }

    componentWillReceiveProps() {
        this.componentDidMount()
    }


    componentDidMount() {
        fetch(API + this.props.focusedEp)
            .then(response => response.json())
            .then(data => this.setState({selectedImg: data.url}));
    }

    render() {
        return (
            <div className='wrapper border-1'>
                <Image imgUrl={left} classNames='slider-elem slider-button case-left'
                       onClickEvent={() =>
                           this.props.updateFunc(
                               Number(this.props.focusedEp) - 1 < 0
                                   ? 0
                                   : Number(this.props.focusedEp) - 1
                           )
                       }/>
                <Image imgUrl={this.state.selectedImg} width='800px'
                       height='400px'/>
                <Image imgUrl={right} classNames='slider-elem slider-button case-right'
                       onClickEvent={() =>
                           this.props.updateFunc(
                               Number(this.props.focusedEp) + 1 > 2
                                   ? 2
                                   : Number(this.props.focusedEp) + 1
                           )
                       }
                />
            </div>
        );
    }
}

export default Slider;
