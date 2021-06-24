import React from 'react'

export const ContentPost = ({post}) => {
    return (
        <article className="card mb-3 mt-3" id="post-article" >
            <img src={post.imgPost} className="card-img-top" alt="img" />
            <div className="card-body p-5">
                <div>
                    <h1 className="card-title feature">
                        <a href="">{post.postTitle}</a>
                    </h1>
                </div>

                <div className="tags d-inline-flex">
                    {
                        // muchas tags
                        post.tags.map((tag, idx)=> <a href="#" className="mr-1" key={idx}><span >#</span>{tag}</a>)
                    }
                    
                </div>

                <div className="autor">
                    <img src={post.author.img} className="rounded-circle border border-secondary ico-profile" />
                    <div className="autor-name">
                        <div>{post.author.fullName}</div>

                        <div>
                            <time dateTime="2021-03-01T14:40:00Z" className="date-no-year" >{post.createdDate} </time>
                            <em>
                                <a href="#" style={{color:'#1395b8'}}>{post.username}</a>
                            </em>
                            <span className="mr-4">・7 min read</span>
                        </div>
                    </div>

                </div>

                <div className="article-content">
                    <p className="mt-2">{post.contentPost}</p>
                </div>
            </div>
        </article>
    )
}
