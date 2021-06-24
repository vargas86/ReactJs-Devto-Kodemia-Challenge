import React from 'react'

export const Listings = ({ posts, post }) => {
    const ownerPosts = posts.filter(currentPost=> currentPost.author.id === post.author.id);
    return (
        <div className="card card-side-right bg-white mt-3">
            <div className="card-header bg-white1 font-weight-bold text-profile-from">
                More from <span className="font-blue">{post.author.fullName}</span>
            </div>
            <ul className="list-group list-group-flush">
                {
                    ownerPosts.map((post, idx)=> {
                        return(
                            <li key={idx} className="list-group-item">{post.postTitle}
                            <h6 className="tags">{post.tags.reduce((accumTag, tag) => accumTag + `#${tag} `,'')}</h6>
                          </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
