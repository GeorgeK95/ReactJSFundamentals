import React, {Component} from 'react'
import reqHandler from '../../utils/reqHandler'
import Post from './partials/Post'
import Notification from "../common/Notification";

const USERNAME = 'username';
const GREETING = 'greeting';

class Catalog extends Component {
    constructor() {
        super()

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        reqHandler.getPosts().then(data => {
            this.setState({posts: data})
        })
    }

    render() {
        return (
            <section id="viewCatalog">
                <div className="posts">
                    {this.state.posts.map((post, index) => {
                        return <Post key={post._id} props={post} index={++index}/>
                    })}
                </div>
            </section>
        )
    }
}

export default Catalog