import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import Add from './components/Add';

const App = () => {
  // States
  const [restaurants, setRestaurants] = useState([])

  const handleCreate = (newRest) => {
    axios.post("https://restaurant-api.herokuapp.com/api/restaurants", newRest)
    .then((res) => {
      console.log(res.data)
      setRestaurants([...restaurants, res.data])
    })
  }

  return (
    <>
      <h1>Restaurant App</h1>
      <button>Add Restaurant</button>
      <Add handleCreate={handleCreate} />
    </>
  );
}

export default App;
