import React, { useState } from "react";
import './Form.css'

const Form = () => {

const [stance, setStance] = useState('');
const [trickName, setTrickName] = useState('');
const [obstacle, setObstacle] = useState('');
const [link, setLink] = useState('');

  return (
    <form>
      <select name="stance-choice">
        <option value={stance}>Choose your Stance</option>
        <option value={stance}>Regular</option>
        <option value={stance}>Switch</option>
      </select>
      <input type="text" placeholder="Name of Trick" value={trickName}/>
      <select name="obstacle-choice">
        <option value={obstacle}>Choose your Obstacle</option>
        <option value={obstacle}>Flatground</option>
        <option value={obstacle}>Ledge</option>
        <option value={obstacle}>Rail</option>
        <option value={obstacle}>Stairs</option>
        <option value={obstacle}>Pool</option>
      </select>
      <input type="text" placeholder="Link" value={link}/>
      <button>SEND IT</button>
    </form>
  )
}

export default Form;