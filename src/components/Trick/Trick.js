import React from "react";
import './Trick.css';

const Trick = ({stance, name, obstacle, tutorial, id}) => {

  return (
    <div className="trick" id={id}>
      <p>{stance} {name}</p>
      <p>Obstacle: {obstacle}</p>
      <p>Link to Tutorial:</p>
      <a href={tutorial}>{tutorial}</a>
    </div>
  )
}

//NOTE: clean up data so words are capitalized

export default Trick;