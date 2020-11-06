import React from 'react';

// component that is called when no results match the query input
const NoImages = () => (
  <li className="not-found">
    <h3>No Results Found</h3>
    <p>You search did not return any results. Please try again.</p>
  </li>
);

export default NoImages;
