import React from 'react'
import Footer from '../../components/Footer/footer';
import LeftSide  from './LeftSide';
import CenterSide  from './CenterSide';
import RightSide  from './RightSide';


function Home() {
  return (
    <>
    <div className="d-block d-md-block d-lg-flex d-xl-flex">
        <section id="left-side" className="d-none d-md-block col-md-4 col-lg-3">
            <LeftSide />
        </section>

        <section className="col-12 col-md-8 col-lg-6 bg-fondo mx-2" id="post-list">
            <CenterSide />
        </section>   

        <section className="col-lg-3 d-none d-lg-block p-3">
            <RightSide />
        </section> 
    </div>    

    <Footer />
    </>
  );
}

export default Home;