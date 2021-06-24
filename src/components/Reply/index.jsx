import React from 'react'

export const Reply = ({reply}) => {
    return (
        <div className="reply-card flex-column" key={reply._id}>
        <div className="w-100 d-flex flex-row mb-3">
  
          <div className="w-100 d-flex flex-row">
              <img src={reply.author.img} alt="profile-pic" className="rounded-circle mr-2 profile-pic" />
  
              <div className="w-100 p-2 border rounded">
                  <p className=" text-muted">{reply.author.username} • {reply.createdDate}</p>
                  <p>{reply.contentReply}</p>
              </div>
          </div>
  
        </div>
    </div>
    )
}
