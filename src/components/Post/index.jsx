import React, { useState } from 'react'
import hearth from '../../assets/images/single/reaction-heart.svg';
import comentario from '../../assets/images/single/comentario.svg';
import { useHistory } from 'react-router-dom';

export const Post = ({ post, replies, hideImage }) => {
    const datePost = new Date(post.createdDate);
    const filteredReplies = replies.filter(reply => reply.idPost === post._id)
    const navigation = useHistory()

    return (
        <article
            className="card mb-3 nav-view-post"
            key={post._id}
            id={post._id}
            onClick={() => navigation.push(`/post-details/${post._id}`)}
        >
            {
                hideImage === true ? null : <img src={post.imgPost} className="card-img-top" alt={post._id} />
            }
            <div className="card-body">
                <div className="autor">

                    <img className="rounded-circle border border-secondary ico-profile" src={post.author.img} />

                    <div className="autor-name">
                        <div>{post.author.fullName}</div>
                        <div>{datePost.getDate()}/{datePost.getFullYear()}</div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title feature">
                        <a href="">{post.postTitle}</a>
                    </h2>
                </div>
                <div className="tags">
                    {
                        post.tags.map((tag, idx) => <a href="" key={idx} className="mr-1 badge"><span>#</span>{tag}</a>)
                    }
                </div>
                <div className="reacts">
                    <div className="react-left">
                        <a href="">
                            <img src={hearth} />
                            <span className="react-text"> &nbsp;reactions</span>
                        </a>
                        <a href="">
                            <img src={comentario} />
                            <span> {filteredReplies.length}  </span><span className="react-text"> &nbsp;comments</span>
                        </a>
                    </div>
                    <div className="react-right">
                        <span>4 min read</span>
                        <button className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </article>
    )
}
