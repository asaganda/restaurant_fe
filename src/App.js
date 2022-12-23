import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Restaurant from './components/Restaurant'
import Nav from './components/Nav'

const App = () => {

const [restaurants, setRestaurants] = useState([])

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
