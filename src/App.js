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
  const [page, setPage] = useState(0)

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

  // Delete a restaurant
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
      <Nav setPage={setPage}/>
      {page === 0 ?
        <div className="restaurants text-center">
          {restaurants.map((restaurant) => {
            return (
              <Restaurant restaurant={restaurant} key={restaurant.id} handleDelete={handleDelete}/>
            )
          })}
        </div>
        :
        <></>
      }
      {page === 1 ? <Add handleCreate={handleCreate}/> : <></> }
      


      <div className="restaurants text-center">
        {restaurants.map((restaurant) => {
          return (
            <>
              <Edit handleUpdate={handleUpdate} id={restaurant.id} restaurant={restaurant}/>
              <Restaurant restaurant={restaurant} key={restaurant.id} handleDelete={handleDelete}/>
            </>
    </>
  )
}

export default App;
