import React from 'react'
import ico1 from '../../assets/images/sidebar/ico1.png'
import ico2 from '../../assets/images/sidebar/ico2.png'
import ico3 from '../../assets/images/sidebar/ico3.png'
import ico4 from '../../assets/images/sidebar/ico4.png'
import ico5 from '../../assets/images/sidebar/ico5.png'
import ico6 from '../../assets/images/sidebar/ico6.png'
import bannerSide from '../../assets/images/content/banner-side-2.jpg'

export const NavLeft = () => {
    return (
        <div className="collapse navbar-collapse d-md-block" id="navbarNav2">
            <div className="navbar-nav">
                <ul>
                    <li className="nav-item active"><a href=""><img src={ico1} /> Home <span
                        className="sr-only">(current)</span></a></li>
                    <li className="nav-item"><a href=""><img src={ico2} /> Reading List</a></li>
                    <li className="nav-item"><a href=""><img src={ico3} /> Listings</a></li>
                    <li className="nav-item"><a href=""><img src={ico4} /> Podcasts</a></li>
                    <li className="nav-item"><a href=""><img src={ico5} /> Videos</a></li>
                    <li className="nav-item"><a href=""><img src={ico6} /> Tags</a></li>
                    <li className="nav-item"><a href="">More...</a></li>
                </ul>

            </div>

            <div className="side-banner">
                <a href=""><img style={{ width: '100%' }} src={bannerSide} alt="img" /></a>
                <h2><a href="">New Champion-Brand DEV Wear is Here!</a></h2>
            </div>
        </div>
    )
}
