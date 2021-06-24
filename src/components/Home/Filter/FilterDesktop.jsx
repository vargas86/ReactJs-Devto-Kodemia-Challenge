import React from 'react'


function FilterDesktop() {
  return (
    <>
  
          <div class="filter-desktop d-none d-md-block">

              <ul class="nav justify-content-end">
                  <li class="nav-item rounded">
                      <a class="nav-link  active" href="#" data-filter="feed" id="filtd-feed">Feed</a>
                  </li>
                  <li class="nav-item rounded">
                      <a class="nav-link" href="#" data-filter="week" id="filtd-week">Week</a>
                  </li>
                  <li class="nav-item rounded">
                      <a class="nav-link" href="#" data-filter="month" id="filtd-month">Month</a>
                  </li>
                  <li class="nav-item rounded">
                      <a class="nav-link" href="#" data-filter="year" id="filtd-year">Year</a>
                  </li>
                  <li class="nav-item rounded">
                      <a class="nav-link" href="#" data-filter="infinity" id="filtd-infinity">Infinity</a>
                  </li>
                  <li class="nav-item rounded">
                      <a class="nav-link" href="#" data-filter="latest" id="filtd-latest">Latest</a>
                  </li>
              </ul>
          </div>


    </>
  );
}

export default FilterDesktop;