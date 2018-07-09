import React, {Component} from 'react'

import reqHandler from '../../utils/reqHandler'
import MyPost from './partials/MyPost'

class MyPosts extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        reqHandler.getMyPosts().then(data => {
            this.setState({posts: data})
        })
    }

    render() {
        return (
            <section id="viewMyPosts">
                <div className="post post-content">
                    <h1>Your Posts</h1>
                </div>
                {this.state.posts.map((post, index) => {
                    return <MyPost key={post._id} props={post} index={++index}/>
                })}
            </section>
        )
    }
}

export default MyPosts