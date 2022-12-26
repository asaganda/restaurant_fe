import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Restaurant from './components/Restaurant'
import Nav from './components/Nav'
import './App.css'
import Add from './components/Add'
import Edit from './components/Edit'


const App = () => {
  // States
  const [restaurants, setRestaurants] = useState([])

  // API ROUTES
  // Create new restaurant
  const handleCreate = (newRest) => {
    axios.post("https://restaurant-api.herokuapp.com/api/restaurants", newRest)
    .then((res) => {
      console.log(res.data)
      setRestaurants([...restaurants, res.data])
    })
  }

  // Fetching all restaurants
  const getRestaurants = () => {
  axios.get('https://restaurant-api.herokuapp.com/api/restaurants')
  .then((response) => setRestaurants(response.data),
    (err) => console.error(err))
  .catch((error) => console.error(error))
  }

  const handleDelete = (data) => {
    axios.delete('https://restaurant-api.herokuapp.com/api/restaurants/' + data.id)
    .then((res) => {
      getRestaurants()
    })
    .catch((err) => console.log(err))
  }

  const handleUpdate = (editRestaurant) => {
    console.log(editRestaurant)
    axios.put('https://restaurant-api.herokuapp.com/api/restaurants/' + editRestaurant.id, editRestaurant)
      .then((response) => {
        getRestaurants()
      })
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
{restaurants.map((restaurant) => {
  return (

    <>
    <Edit handleUpdate={handleUpdate} restaurant={restaurant}/>
    <Restaurant restaurant={restaurant} key={restaurant.id} handleDelete={handleDelete}/>
    </>
    

  )
})}
</div>
</>
  );
}

export default App;
