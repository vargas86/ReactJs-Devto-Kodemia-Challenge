import React from 'react'
import FilterDesktop from './Filter/FilterDesktop'
import FilterMobile from './Filter/FilterMobile'

function CenterSide() {
  return (
    <>
      
          <div class="row">
              <div class="col-12 pb-1 pt-3 px-md-0">
                  <div class="section-title d-flex justify-content-between align-items-center pt-3">
                      
                      <div>
                          <h1>Posts</h1>
                      </div>

                      {/*<!--filter-desktop-->*/}
                      <FilterDesktop />

                      {/*<!--filter-movil-->*/}
                      <FilterMobile />

                  </div>
              </div>

              <div class="col-12  p-0" id="card-wrapper">
                  
              </div>
          </div>

    </>
  );
}

export default CenterSide;