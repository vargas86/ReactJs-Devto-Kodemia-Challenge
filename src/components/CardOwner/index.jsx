import React from 'react'

export const CardOwner = ({ post }) => {
    return (
        <div className="card bg-white1">
            <h5 className="card-header profile p-3"></h5>
            <div className="card-body">
                <div>
                    <img className="rounded-circle ico-profile2" src={post.author.img} />
                    <span className="text-center font-weight-bold text-profile">{post.author.username}</span>

                </div>

                <p className="card-text">{post.author.fullName}</p>
                <a href="#" className="btn btn-blue btn-lg btn-block">Follow</a>
            </div>
        </div>
    )
}
