import React from 'react'
import {Link} from 'react-router-dom'

let Post = props => {
    return (
        <article className="post">

            <div className="col rank">
                <span>{props.index}</span>
            </div>
            <div className="col thumbnail">
                <a href={props.props.url}>
                    <img src={props.props.imageUrl}/>
                </a>
            </div>
            <div className="post-content">
                <div className="title">
                    <a href={props.props.url}>
                        {props.props.title}
                    </a>
                </div>
                <div className="details">
                    <div className="info">
                        submitted by {props.props.author}
                    </div>
                    <div className="controls">
                        <ul>
                            <li className="action"><Link className="commentsLink"
                                                         to={`/details/${props.props._id}`}>comments</Link></li>
                            {localStorage.getItem('username') === props.props.author ?
                                <li className="action"><Link className="deleteLink"
                                                             to={`/delete/${props.props._id}`}>delete</Link></li> : ""}
                            {localStorage.getItem('username') === props.props.author ?
                                <li className="action"><Link className="editLink"
                                                             to={`/edit/${props.props._id}`}> edit </Link></li> : ""}
                        </ul>
                    </div>

                </div>
            </div>
        </article>
    )
}

export default Post