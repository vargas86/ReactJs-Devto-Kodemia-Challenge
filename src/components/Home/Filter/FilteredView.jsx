import React from 'react'

function FilteredView() {
  return (
    <div>
      
      <section className="container">
    <div className="row">

        <div className="d-none d-md-block col-md-3">
 
        </div>

        <div className="col-12 col-md-9">
            <h3 className="font-weight-bold m-3">Search Results</h3>
        </div>

        <div className="d-none d-md-block col-md-3">
            <div className="side-banner">
                <a href="#">
                    <img className="w100" src="images/content/banner-laptop.jpg" alt="" srcset=""/>
                </a>
                <h2><a href="#">New Champion-Brand DEV Wear is Here!</a></h2>
            </div>
        </div>

        <div className="col-12 col-md-9">
            <div className="cont-wrapp">
                <section id="post-list">
                    <div id="cards-wrapper" className="col-12 h-100">
                        
                    </div>        
                </section>
            </div>    
        </div>

    </div>
</section>
     

    </div>
  );
}

export default FilteredView;