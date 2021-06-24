import React from 'react'

function RightSide() {
  return (
    <>

      <div className="card card-side-right mt-3 bg-white1">

        <img src="images/single/image_side_right.png" class="card-img-top" alt=""></img>
            
            <div className="card-body">
                <h5 className="card-title font-weight-bold bg-white1">Stories(122)</h5>
                <p clasNameN="card-text">
                </p>
            </div>

            <ul className="list-group list-group-flush ">
                <li className="list-group-item ">SheCoded 2021 — Stories From Women Building Software and the Allies
                    Supporting
                    Them</li>
                <li className="list-group-item ">Happy International Women's Day to the Women Building Online
                    Community 💖
                </li>
                <li className="list-group-item ">Nevertheless, HomegirlHacker Coded in 2021!</li>
                <li className="list-group-item ">Nevertheless, Sigute Coded in 2020/2021!</li>
                <li className="list-group-item ">Resilience is key to my success</li>
                <li className="list-group-item ">

                    <a href="#" className="btn btn-blue btn-lg btn-block">Share Your Story</a>
                    <a href="#" className="btn btn-grey btn-lg btn-block">See all post</a>


                </li>
            </ul>

        </div>
  

  <div className="card card-side-right mt-3 bg-white1">

            <div className="card-header text-order ">
            Listings <span>See all</span>
            </div>

            <ul className="list-group list-group-flush">
            <li className="list-group-item ">Meet iOS community with informal interviews
                <h6>misc</h6>
            </li>
            <li className="list-group-item ">Frontend Engineer for OSS project
                <h6>jobs</h6>
            </li>
            <li className="list-group-item ">The ultimate compilation of Cheat sheets (200+) - 🎁 / Roadmap to
                dev 🚀
                -Free!
                <h6>collabs</h6>
            </li>
            <li className="list-group-item ">[Mar 18th] ⚙️ React x REST API Workshop ⚙️
                <h6>events</h6>
            </li>
            <li className="list-group-item ">Developer Evangelist - Computer Vision & Robotics
                <h6>jobs</h6>
            </li>
            </ul>

            <div className="card-footer bg-white1 text-center font-weight-bold">
            Create a Listing
            </div>
  </div>



  <div className="card card-side-right mt-3 ">
        <div className="card-header font-weight-bold text-profile-from bg-white1">
        #news
        </div>
                <ul className="list-group list-group-flush">
                          <li className="list-group-item ">Game Dev Digest — Issue #84 - Learning, Tips, and Free Courses
                            <h6>3 comments</h6>
                          </li>
                          <li className="list-group-item ">Continuous Feedback for Developers
                            <h6><span className="badge button-new">New</span></h6>
                          </li>
                          <li className="list-group-item ">You can now get voice and video calls with Whatsapp Desktop
                            <h6><span className="badge button-new">New</span></h6>
                          </li>
                          <li className="list-group-item">PyScaffold 4.0 is here 🔥
                            <h6><span className="badge button-new">New</span></h6>
                          </li>
                          <li className="list-group-item">I've Joined Forem as a Principal SRE
                            <h6>3 comments</h6>
                          </li>
                      </ul>
  </div>

  <div className="card  card-side-right mt-3">
        <div className="card-header font-weight-bold text-profile-from">
        #help
        </div>

        <ul className="list-group list-group-flush ">
        <li className="list-group-item ">Application Design for Multi-Tenancy Apps
            <h6>3 comments</h6>
        </li>
        <li className="list-group-item">Linux from Scratch on WSL2?
            <h6><span className="badge button-new">New</span></h6>
        </li>
        <li className="list-group-item">The Odin Project still worth to go through in 2021?
            <h6>3 comments</h6>
        </li>
        <li className="list-group-item">How to install ImageMagick?
            <h6>3 comments</h6>
        </li>
        <li className="list-group-item">How do I create a Player for a Podcast using RSS Feed?
            <h6><span className="badge button-new">New</span></h6>
        </li>
        </ul>
    </div>    
    
 

    </>
  );
}

export default RightSide;