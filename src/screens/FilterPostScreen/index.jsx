import React from 'react'
import { useLocation } from 'react-router-dom';
import { Post } from '../../components/Post';


export const FilterPostScreen = () => {
    const location = useLocation()


    const hideImage = true;
    return (
        <div className="w-100 bg-fondo">


            <section className="col-12 col-md-8 col-lg-4 ml-5 bg-fondo" id="post-list">
                <div className="row">

                    <div className="col-12 pb-1 pt-3 px-md-0">
                        <div className="section-title d-flex justify-content-between align-items-center pt-3">

                            <div className="col-12  p-0" id="card-wrapper">
                                {
                                    location.state.filteredPosts.map((post, idx) => <Post post={post} replies={location.state.replies} hideImage={hideImage} key={idx} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}
