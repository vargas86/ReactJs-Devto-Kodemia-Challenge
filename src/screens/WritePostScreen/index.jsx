import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CreatePost } from '../../components/CreatePost';
import '../../css/newpost.scss';

export const WritePostScreen = () => {
    const [post, setPost] = useState({
        postTitle: "",
        tags: "",
        imgPost: "",
        contentPost: "",
    });
    const navigation = useHistory();


    const [errors, setErrors] = useState({
        requiredFields: false,
        requestError: false
    });

    const handleChangeFields = ev => {
        setErrors({
            requiredFields: false,
            requestError: false
        })
        setPost({
            ...post,
            [ev.target.name]: ev.target.value
        })
    };

    const handleSubmit = async ev => {
        ev.preventDefault()
        try {
            let today = new Date();
            let config = { day: 'numeric', year: 'numeric', month: 'long' };
            let createdDate = today.toLocaleDateString("en-US", config);
            let createdTime = `${today.getHours()}:${today.getMinutes() <= 9 ? '0' + today.getMinutes() : today.getMinutes()}`;

            const { postTitle, tags, imgPost, contentPost } = post
            if (!postTitle || !tags || !imgPost || !contentPost) {
                setErrors({ ...errors, requiredFields: true });
                return
            }

            let newPost = {
                ...post,
                tags: tags.trim().split(',').filter(tag => tag !== ""),
                createdDate,
                createdTime
            }
            let options = {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            const { data } = await axios.post('https://devto-challenge-react.herokuapp.com/posts', newPost, options)
            setPost({
                postTitle: "",
                tags: "",
                imgPost: "",
                contentPost: "",
            });
            navigation.push('/')
        } catch (error) {
            setErrors({
                ...errors,
                requestError: true
            })
        }
    }
    return (
        <div className="bg-grey d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
            <div className="container">
                <div id="form-wrapper" className="col-12 col-md-8 w-100 bg-white1 p-3 my-md-4 shadow-sm rounded" style={{ height: '80vh' }}>
                    {errors.requestError ? alert('Problemas en la peticion, intenta de nuevo mas tarde'): null}
                    {errors.requiredFields ? alert('Campos obligatorios, favor de rellenarlos todos.'): null}
                    <CreatePost
                        handleChangeFields={handleChangeFields}
                        post={post}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>

    )
}
