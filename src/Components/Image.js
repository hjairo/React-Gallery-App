import React from 'react';

// Image component that displays the image itself with appropriate tags
const Image = (props) => (
  <li>
    <img src={props.src} alt={props.title} title={props.title} />
  </li>
);

export default Image;
