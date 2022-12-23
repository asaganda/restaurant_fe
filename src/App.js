import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Restaurant from './components/Restaurant'
import Nav from './components/Nav'
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

  const getRestaurants = () => {
   axios
     .get('https://restaurant-api.herokuapp.com/api/restaurants')
     .then(
       (response) => setRestaurants(response.data),
       (err) => console.error(err)
     )
     .catch((error) => console.error(error))
  }

  useEffect(() => {
   getRestaurants()
  }, [])

  return (
    <>
    <Nav/>
  <button>Add Restaurant</button>
  <Add handleCreate={handleCreate}/>
  <div className="restaurants text-center">
 {restaurants.map((restaurants) => {
   return (
     <Restaurant restaurants={restaurants}/>
   )
 })}
</div>
</>
  );
}

export default App;
