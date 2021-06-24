import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Reply } from '../Reply';

export const RepliesSection = ({ post, idPost }) => {
    const [contentReply, setContentReply] = useState('');
    const [newReplySubmit, setNewReplySubmit] = useState(false);
    const [replies, setReplies] = useState([]);

    useEffect(() => {
        const getReplies = async () => {
            try {
                const { data } = await axios.get('https://devto-challenge-react.herokuapp.com/replies')
                setReplies(data.data.replies)
            } catch (error) {
                console.error(error)
            }
        }
        getReplies()
    }, [newReplySubmit])


    const postReplies = !replies ? [] : replies.filter(reply => reply.idPost === post._id)

    const handleSubmitReply = async (ev) => {
        ev.preventDefault();
        let config = { day: 'numeric', year: 'numeric', month: 'long' };
        let today = new Date();
        let createdDate = today.toLocaleDateString("en-US", config);
        let createdTime = `${today.getHours()}:${today.getMinutes() <= 9 ? '0' + today.getMinutes() : today.getMinutes()}`;
        if (!contentReply) {
            alert('No puedes subir un comentario vacio');
            return;
        }

        let newReply = {
            createdDate,
            createdTime,
            contentReply,
            idPost
        }

        const { data } = await axios.post('https://devto-challenge-react.herokuapp.com/replies', newReply);
        setNewReplySubmit(true);
        setNewReplySubmit(false);
        setContentReply('');
    }

    if (!replies) {
        return (<div>Loading</div>)
    }

    return (
        <article id="discussions" className="card p-4 mb-3 w-100">
            <div className="d-flex flex-column ">
                <div className="d-flex flex-row justify-content-between mb-4">
                    <h2 className="font-weight-bold m-0 my-auto discussion-header"></h2>
                    <button className="btn btn-outline-secondary rounded">Suscribe</button>
                </div>

                <form onSubmit={handleSubmitReply}>
                    <div className="w-100 d-flex flex-row mb-2">
                        <img src={post.author.img} alt="profile-pic" className="rounded-circle mr-2 profile-pic" id="replies-pic" />
                        <input
                            type="text"
                            placeholder="Add to the discussion" className="reply-input w-100 rounded"
                            value={contentReply}
                            onChange={(ev) => setContentReply(ev.target.value)}
                        ></input>
                    </div>
                    <div className="d-flex mb-4">
                        <button type="submit" className="btn bg-blue-boton text-white" id="reply-comment">Comentar</button>
                    </div>
                </form>


                <div id="wrapper-replies" className="mt-2">
                    {
                        postReplies.map((reply, idx) => <Reply reply={reply} key={idx} />)
                    }
                </div>

                <div className="code-conduct d-flex justify-content-center">
                    <a href="#" >Code of conduct</a>
                    <span role="presentation">•</span>
                    <a href="#" >Report abuse</a>
                </div>

            </div>
        </article>
    )
}
