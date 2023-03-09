import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Restaurant from './components/Restaurant'
import Nav from './components/Nav'
import './App.css'
import Add from './components/Add'
import Edit from './components/Edit'
import Home from './components/Home'
import Footer from './components/Footer'

const App = () => {
  // States
  const [restaurants, setRestaurants] = useState([])
  const [page, setPage] = useState(0)
  
  // const baseURL = "https://restaurant-api.herokuapp.com/api/restaurants"
  const baseURL = "http://localhost:8000/api/restaurants"

  // API ROUTES
  // Create new restaurant
  const handleCreate = (newRest) => {
    axios.post(baseURL, newRest)
    .then((res) => {
      console.log(res.data)
      setRestaurants([...restaurants, res.data])
    })
  }

  // Fetching all restaurants
  const getRestaurants = () => {
  axios.get(baseURL)
  .then((response) => setRestaurants(response.data),
    (err) => console.error(err))
  .catch((error) => console.error(error))
  }

  // Delete a restaurant
  const handleDelete = (data) => {
    axios.delete(baseURL + '/' + data.id)
    .then((res) => {
      getRestaurants()
    })
    .catch((err) => console.log(err))
  }

  const handleUpdate = (editRestaurant) => {
    console.log(editRestaurant)
    axios.put(baseURL + '/' + editRestaurant.id, editRestaurant)
      .then((response) => {
        getRestaurants()
      })
  }

  useEffect(() => {
  getRestaurants()
  }, [])


  return (
    <>
      <header>
        <Nav setPage={setPage}/>
      </header>
      <main className="main container-fluid">
      {page === 0 ? <Home setPage={setPage} restaurants={restaurants} handleDelete={handleDelete} handleUpdate={handleUpdate}/> : <></> }
      {page === 1 ? 
      <>
        <Add handleCreate={handleCreate} setPage={setPage}/> 
      </>
      :
      <></> }
      </main>
      <Footer/>
    </>
  )
}

export default App;
