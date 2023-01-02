import React, { useState } from "react";
import './Form.css'

const Form = () => {

const [stance, setStance] = useState('');
const [trickName, setTrickName] = useState('');
const [obstacle, setObstacle] = useState('');
const [link, setLink] = useState('');

  return (
    <form>
      <select value={stance} name="stance-choice" onChange={event => setStance(event.target.value)}>
        <option value=''>Choose your Stance</option>
        <option value='Regular'>Regular</option>
        <option value='Switch'>Switch</option>
      </select>
      <input type="text" placeholder="Name of Trick" value={trickName} onChange={event => setTrickName(event.target.value)}/>
      <select value={obstacle} name="obstacle-choice" onChange={event => setObstacle(event.target.value)}>
        <option value=''>Choose your Obstacle</option>
        <option value='Flatground'>Flatground</option>
        <option value='Ledge'>Ledge</option>
        <option value='Rail'>Rail</option>
        <option value='Stairs'>Stairs</option>
        <option value='Pool'>Pool</option>
      </select>
      <input type="text" placeholder="Link" value={link} onChange={event => setLink(event.target.value)}/>
      <button>SEND IT</button>
    </form>
  )
}

export default Form;