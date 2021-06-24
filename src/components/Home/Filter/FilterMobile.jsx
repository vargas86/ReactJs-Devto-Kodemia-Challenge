import React from 'react'


function FilterMobile() {
  return (
    <>
  
          <div class="d-md-none filter-movil">
              <select id="feed-filter-select" class="p-2 rounded" aria-label="feed-filter-select">
                  <option value="feed" selected="">Feed</option>
                  <option value="week">Week</option>
                  <option value="month">Month</option>
                  <option value="year">Year</option>
                  <option value="infinity">Infinity</option>
                  <option value="latest">Latest</option>
              </select>
          </div>

    </>
  );
}

export default FilterMobile;