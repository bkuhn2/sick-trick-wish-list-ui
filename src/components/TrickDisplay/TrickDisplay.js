import React from "react";
import Trick from "../Trick/Trick";
import './TrickDisplay.css';


const TrickDisplay = ({tricks}) => {

  const allTricks = tricks.map(trick => {
    return < Trick 
      stance={trick.stance}
      name={trick.name}
      obstacle={trick.obstacle}
      tutorial={trick.tutorial}
      key={trick.id}
    />
  })

  return (
    <section className="trick-display">
      {allTricks}
    </section>
  )
}

export default TrickDisplay;