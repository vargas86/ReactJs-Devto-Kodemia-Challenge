import React from 'react'
import SideNavBar from './SideNavBar/SideNavBar'

function LeftSide(props) {
  return (
    <>
       <div className="collapse navbar-collapse d-md-block" id="navbarNav2">
            <div className="navbar-nav">

                <ul>
                    <SideNavBar 
                        activeClass="nav-item active"
                        Url="#"
                        imageUrl="images/sidebar/ico1.png"
                        liName="Home"
                        spanContent="(current)"
                    />

                    <SideNavBar 
                        activeClass="nav-item"
                        Url="#"
                        imageUrl="images/sidebar/ico2.png"
                        liName="Reading List"
                    />

                    <SideNavBar 
                        activeClass="nav-item"
                        Url="#"
                        imageUrl="images/sidebar/ico3.png"
                        liName="Listings"
                    />

                    <SideNavBar 
                        activeClass="nav-item"
                        Url="#"
                        imageUrl="images/sidebar/ico4.png"
                        liName="Podcasts"
                    />

                    <SideNavBar 
                        activeClass="nav-item"
                        Url="#"
                        imageUrl="images/sidebar/ico5.png"
                        liName="Videos"
                    />

                    <SideNavBar 
                        activeClass="nav-item"
                        Url="#"
                        imageUrl="images/sidebar/ico6.png"
                        liName="Tags"
                    />

                    <SideNavBar 
                        activeClass="nav-item"
                        Url="#"
                        liName="More..."
                    />
                </ul>

    </div>
  </div>

  <div className="side-banner">
    <a href="#">
        <img className="w100" src="images/content/banner-side-2.jpg" alt="" srcset=""></img>
    </a>
    <h2><a href="#">New Champion-Brand DEV Wear is Here!</a></h2>
  </div>
    </>
  );
}

export default LeftSide;