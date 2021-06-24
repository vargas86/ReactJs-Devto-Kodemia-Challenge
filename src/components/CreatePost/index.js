import React from 'react'

export const CreatePost = ({ handleChangeFields, post, handleSubmit }) => {
    return (
        <form className="m-3 p-3 text-muted" id="form-new-post" onSubmit={handleSubmit}>
            <h1 className="mb-5 font-weight-bold">
                Add New Post
            </h1>

            <div className="form-group">
                <input
                    onChange={handleChangeFields} 
                    id="new-post-image"
                    type="text"
                    placeholder="Add cover image URL here..."
                    className="form-control"
                    name="imgPost"
                    value={post.imgPost}

                />
            </div>
            <div className="form-group">
                <input
                    onChange={handleChangeFields}
                    id="new-post-title"
                    placeholder="Write title here..."
                    type="text"
                    className="form-control"
                    name="postTitle"
                    value={post.postTitle}
                />
            </div>
            <div className="form-group">
                <input
                    onChange={handleChangeFields}
                    id="new-post-tags"
                    placeholder="Add up to 4 tags..."
                    type="text"
                    className="form-control"
                    name="tags"
                    value={post.tags}
                />
            </div>
            <div className="form-group">
                <input
                    onChange={handleChangeFields}
                    id="new-post-content"
                    placeholder="Write content here..."
                    type="text"
                    className="h-10 form-control"
                    name="contentPost"
                    value={post.contentPost}
                />
            </div>

            <button
                type="submit"
                className="btn btn-primary w-10 mt-3 bg-blue-boton"
                id="save-new-post"
            >
                Publish
            </button>
        </form>
    )
}
