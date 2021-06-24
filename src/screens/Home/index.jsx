import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { NavLeft } from '../../components/NavLeft'
import { RightSide } from '../../components/RightSide'
import { Post } from '../../components/Post';
import { arrayByCurrentMonth, concatDate } from '../../utilities/filters';

export const
    Home = () => {
        const [replies, setReplies] = useState([]);
        const [posts, setPosts] = useState([]);
        const [filter, setFilter] = useState('feed')

        useEffect(() => {
            const getPosts = async () => {
                try {
                    switch (filter) {
                        case 'feed':
                            const responseFeed = await axios.get('https://devto-challenge-react.herokuapp.com/posts')
                            setPosts(responseFeed.data.data.posts)
                            break;
                        case 'week':
                            const responseWeek = await axios.get('https://devto-challenge-react.herokuapp.com/posts')
                            let currentMonth = arrayByCurrentMonth(responseWeek.data.data.posts);
                            let lastWeek = currentMonth.sort((a, b) => concatDate(a.createdDate, b.createdTime).getTime() - concatDate(b.createdDate, a.createdTime).getTime());
                            setPosts(lastWeek)
                            break;
                        case 'month':
                            const responseMonth = await axios.get('https://devto-challenge-react.herokuapp.com/posts');
                            let onlycurrentMonth = arrayByCurrentMonth(responseMonth.data.data.posts);
                            let lastMonth = onlycurrentMonth.sort((a, b) => concatDate(a.createdDate, b.createdTime).getTime() - concatDate(b.createdDate, a.createdTime).getTime());
                            setPosts(lastMonth)
                            break;
                        case 'year':
                            const responseYear = await axios.get('https://devto-challenge-react.herokuapp.com/posts')
                            let currentDate = new Date()
                            let onlyLastYear = responseYear.data.data.posts.filter((item) => new Date(item.createdDate).getFullYear() < currentDate.getFullYear());
                            let lastYear = onlyLastYear.sort((a, b) => concatDate(a.createdDate, a.createdTime).getTime() - concatDate(b.createdDate, b.createdTime).getTime())
                            setPosts(lastYear)
                            break;
                        case 'infinity':
                            const responseInfinity = await axios.get('https://devto-challenge-react.herokuapp.com/posts')
                            setPosts(responseInfinity.data.data.posts)
                            break;
                        case 'latest':
                            const responseLatest = await axios.get('https://devto-challenge-react.herokuapp.com/posts')
                            setPosts(responseLatest.data.data.posts.reverse())
                            break;
                        default:
                            const responseDefault = await axios.get('https://devto-challenge-react.herokuapp.com/posts')
                            setPosts(responseDefault.data.data.posts)
                            break;
                    }
                } catch (error) {
                    console.error(error)
                }
            }
            getPosts()
        }, [filter])


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
        }, [])

        if (!posts || !replies) {
            return (<div className="container container-fluid"><p>loading...</p></div>)
        }

        return (
            <div className="bg-fondo">
                <div className="container container-fluid" style={{ minHeight: '60vh' }}>
                    <div className="cont-wrapp row" >

                        <section id="left-side" className="d-none d-md-block col-md-4 col-lg-3">
                            <NavLeft />
                        </section>

                        <section className="col-12 col-md-8 col-lg-6 bg-fondo" id="post-list">
                            <div className="row">

                                <div className="col-12 pb-1 pt-3 px-md-0">
                                    <div className="section-title d-flex justify-content-between align-items-center pt-3">
                                        <div>
                                            <h1>Posts</h1>
                                        </div>
                                        <div className="filter-desktop d-none d-md-block">
                                            <ul className="nav justify-content-end">
                                                <li className="nav-item rounded">
                                                    <button type="button" className={`general-btn nav-link ${filter === 'feed' ? 'active' : ''}`} onClick={() => setFilter('feed')} data-filter="feed" id="filtd-feed">Feed</button>
                                                </li>
                                                <li className="nav-item rounded">
                                                    <button type="button" className={`general-btn nav-link ${filter === 'week' ? 'active' : ''}`} onClick={() => setFilter('week')} data-filter="week" id="filtd-week">Week</button>
                                                </li>
                                                <li className="nav-item rounded">
                                                    <button type="button" className={`general-btn nav-link ${filter === 'month' ? 'active' : ''}`} onClick={() => setFilter('month')} data-filter="month" id="filtd-month">Month</button>
                                                </li>
                                                <li className="nav-item rounded">
                                                    <button type="button" className={`general-btn nav-link ${filter === 'year' ? 'active' : ''}`} onClick={() => setFilter('year')} data-filter="year" id="filtd-year">Year</button>
                                                </li>
                                                <li className="nav-item rounded">
                                                    <button type="button" className={`general-btn nav-link ${filter === 'infinity' ? 'active' : ''}`} onClick={() => setFilter('infinity')} data-filter="infinity" id="filtd-infinity">Infinity</button>
                                                </li>
                                                <li className="nav-item rounded">
                                                    <button type="button" className={`general-btn nav-link ${filter === 'latest' ? 'active' : ''}`} onClick={() => setFilter('latest')} data-filter="latest" id="filtd-latest">Latest</button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="d-md-none filter-movil">
                                            <select id="feed-filter-select" className="p-2 rounded" onChange={ev => setFilter(ev.target.value)} >
                                                <option value="feed" defaultValue>Feed</option>
                                                <option value="week">Week</option>
                                                <option value="month">Month</option>
                                                <option value="year">Year</option>
                                                <option value="infinity">Infinity</option>
                                                <option value="latest">Latest</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12  p-0" id="card-wrapper">
                                    {
                                        posts.map((post, idx) => <Post post={post} replies={replies} key={idx} />)
                                    }
                                </div>
                            </div>
                        </section>

                        <section className="col-lg-3 d-none d-lg-block p-3">
                            <RightSide />
                        </section>


                    </div>
                </div >
            </div>
        )
    }
