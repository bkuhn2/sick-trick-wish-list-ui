import React, { useState } from "react";
import './Form.css'

const Form = ({addTrick}) => {

const [stance, setStance] = useState('');
const [trickName, setTrickName] = useState('');
const [obstacle, setObstacle] = useState('');
const [link, setLink] = useState('');

const sendIt = event => {
  event.preventDefault();
  const trick = {
    stance: stance,
    name: trickName,
    obstacle: obstacle,
    tutorial: link,
    id: Date.now()
  }
  addTrick(trick);
  resetState();
}

const resetState = () => {
  setStance('');
  setTrickName('');
  setObstacle('');
  setLink('');
}

  return (
    <form>
      <select value={stance} id="stance-choice" onChange={event => setStance(event.target.value)}>
        <option value=''>Choose your Stance</option>
        <option value='Regular'>Regular</option>
        <option value='Switch'>Switch</option>
      </select>
      <input id="trick-name" type="text" placeholder="Name of Trick" value={trickName} onChange={event => setTrickName(event.target.value)}/>
      <select value={obstacle} id="obstacle-choice" onChange={event => setObstacle(event.target.value)}>
        <option value=''>Choose your Obstacle</option>
        <option value='Flatground'>Flatground</option>
        <option value='Ledge'>Ledge</option>
        <option value='Rail'>Rail</option>
        <option value='Stairs'>Stairs</option>
        <option value='Pool'>Pool</option>
      </select>
      <input id="link" type="text" placeholder="Link" value={link} onChange={event => setLink(event.target.value)}/>
      <button onClick={event => sendIt(event)}>
        SEND IT
      </button>
    </form>
  )
}

export default Form;