import React from 'react';

function About(props) {
  return (
    <aside>
      {/* Displays the blog logo image. 
      If 'props.image' is provided, use it as the source. 
      Otherwise, use a placeholder image.
      The 'alt' attribute provides alternative text for accessibility. */}
      <img src={props.image || "https://via.placeholder.com/215"} alt="blog logo" />
      
     
      <p>{props.about}</p>
    </aside>
  );
}

export default About;
