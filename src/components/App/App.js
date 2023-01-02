import React, { useState, useEffect } from 'react';
import './App.css';
import fetchData from '../../APIcalls';
import Trick from '../Trick/Trick';
import TrickDisplay from '../TrickDisplay/TrickDisplay';

const App = () => {

  const [tricks, setTricks] = useState([]);

  const getTricks = () => {
    fetchData('http://localhost:3001/api/v1/tricks')
      .then(data => {
        // console.log('data: ', data);
        setTricks(data);
      })
  }

  useEffect(() => {
    getTricks();
  }, [])

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      < TrickDisplay tricks={tricks} />
    </div>
  );
}

export default App;