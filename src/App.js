import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react'

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
  <h1>Restaurant App</h1>
  <div className="restaurants text-center">
 {restaurants.map((restaurants) => {
   return (
      <div class="card" >
        <img src={restaurants.image} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">Name: {restaurants.name}</h5>
        <p class="card-text"> Price: {restaurants.price}</p>
        <p class="card-text"> Cuisine: {restaurants.cuisine}</p>
        <p class="card-text"> Address: {restaurants.address}</p>
        <p class="card-text"> Phone Number: {restaurants.phone}</p>
      </div>
  </div>
   )
 })}
</div>
</>
  );
}

export default App;
