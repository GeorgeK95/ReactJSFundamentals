import React, {Component} from 'react'
import dataProvider from '../../utils/dataProvider'
import reqHandler from '../../utils/reqHandler'

const USERNAME = 'username';

class CreateComment extends Component {
    constructor() {
        super()

        this.dataProvider = (e) => {
            this.setState(dataProvider(e))
        }

        this.createComment = (e) => {
            e.preventDefault()

            reqHandler.addComment(this.state).then(data => {
                console.log(data)
            })
        }
    }

    componentDidMount() {
        this.setState({
            author: localStorage.getItem(USERNAME),
            postId: this.props.props
        })
    }

    render() {
        return (
            <div className="post post-content">
                <form id="commentForm" onSubmit={(e) => {
                    this.createComment(e)
                }}>

                    <label>Comment</label>
                    <textarea onChange={(e) => {
                        this.dataProvider(e)
                    }} name="content" type="text"></textarea>
                    <input type="submit" value="Add Comment" id="btnPostComment"/>
                </form>
            </div>
        )
    }

}

export default CreateComment