import React from 'react'

let MyPost = props => {
    return (
        <section id="viewMyPosts">

            <div className="posts">
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
                                    <li className="action"><a className="commentsLink" href="#">comments</a></li>
                                    <li className="action"><a className="editLink" href="#">edit</a></li>
                                    <li className="action"><a className="deleteLink" href="#">delete</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div className="clear"></div>
                </article>
            </div>
        </section>
    )
}

export default MyPost