import React, { useState, useEffect } from 'react';
import './App.css';
import fetchData from '../../APIcalls';
import Trick from '../Trick/Trick';
import TrickDisplay from '../TrickDisplay/TrickDisplay';
import Form from '../Form/Form';

const App = () => {

  const [tricks, setTricks] = useState([]);

  const getTricks = () => {
    fetchData('http://localhost:3001/api/v1/tricks')
      .then(data => {
        setTricks(data);
      })
  }

  useEffect(() => {
    getTricks();
  }, [])

  const addTrick = (newTrick) => {
    setTricks([...tricks, newTrick])
  }

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form addTrick={addTrick}/>
      <TrickDisplay tricks={tricks} />
    </div>
  );
}

export default App;