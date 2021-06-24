import React, { useState, useEffect } from "react";

import BurguerMenu from "./BurguerMenu";
import DevLogo from "./DevLogo";
import NavSearch from "./NavSearch";
import MovileSearch from "./MovileSearch";
import AppButton from "../AppButton";
import NavIcon from "../Navbar/NavIcon";
import NavAvatar from "./NavAvatar";
import DropDownMenu from "./DropDownMenu";
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";
import { Routes } from "../Routes";

import "../../css/interior.scss";
import "../../css/newpost.scss";
import "../../css/style.scss";
import "../../css/viewpost.scss";
import "../../css/navbar.css";

export const Navbar = () => {
    const [titleReg, setTitleReg] = useState('');
    const [posts, setPosts] = useState([])
    const [replies, setReplies] = useState([]);

    const history = useHistory();
    useEffect(() => {
        const request = async () => {
            const { data } = await axios.get('https://devto-challenge-react.herokuapp.com/posts')
            setPosts(data.data.posts)
        }
        request()
    }, []);

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

        const getFilterPost = () => {
            const titleRegExp = new RegExp(titleReg, 'gi')
            let filteredPosts = posts.filter(post => titleRegExp.test(post.postTitle))
            if (titleReg === '') {
                history.push('/')
                return;
            }
            history.push('/filtered-posts', { filteredPosts, replies })
        }
        getFilterPost();
    }, [titleReg])



    const handleChangeInput = ev => {
        setTitleReg(ev.target.value)
    }

    return (
        <nav className="shadow">
            <div className="d-flex flex-row justify-content-between ">
                <div className="navbar d-flex flex-row justify-content-center align-items-center">
                    <BurguerMenu
                        className="d-xs-block d-md-none"
                        src="../../images/icon-menu.svg"
                    />
                    <DevLogo className="navbar-logo" />
                    <NavSearch handleChangeInput={handleChangeInput} className="d-none d-md-block navbar-search" />
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center mr-5 ">
                    <MovileSearch
                        className="d-none d-xs-block d-md-none"
                        src="../../images/icon-search.svg"
                    />
                    <AppButton
                        type="anchor"
                        text="Create post"
                        data-view="NewPost"
                        className="d-none d-md-block btn-post mr-2"
                    />
                    <NavIcon className="ml-3 mr-3 " src="../../images/icon-connect.svg" />
                    <NavIcon
                        className="ml-3 mr-3"
                        src="../../images/icon-notification.svg"
                    />
                    <NavAvatar
                        id="user-dropdown-pic"
                        style="width: 40px; height: 40px;"
                        className="navbar-avatar"
                    >
                        <DropDownMenu />
                    </NavAvatar>
                </div>
            </div>
            <Routes />
        </nav>
    );
};
