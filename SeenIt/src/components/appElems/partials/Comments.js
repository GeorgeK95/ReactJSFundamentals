import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const API_URL = 'https://baas.kinvey.com/appdata/kid_BkXe2bw_b/comments/';
const HTTP_DELETE = 'DELETE';
const TOKEN = 'token';

class Comments extends Component {
    constructor() {
        super()

        this.deleteComment = (e) => {
            fetch(API_URL + this.props.props._id, {
                method: HTTP_DELETE,
                headers: {
                    Authorization: 'Kinvey ' + localStorage.getItem(TOKEN)
                }
            }).then(res => {
                return res.json()
            }).then(deletedComment => {
                console.log(deletedComment)
            })
        }
    }

    render() {
        return (
            <article className="post post-content">

                <p>{this.props.props.content}</p>
                <div className="info">
                    submitted
                    by {this.props.props.author} {localStorage.getItem('username') === this.props.props.author ?
                    <Link onClick={(e) => {
                        this.deleteComment(e)
                    }} to={`/catalog`} className="deleteLink">delete</Link> : ""}
                </div>
            </article>
        )
    }
}

export default Comments