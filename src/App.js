import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Restaurant from './components/Restaurant'
import Nav from './components/Nav'
import './App.css'
import Add from './components/Add'
import Edit from './components/Edit'
import Home from './components/Home'
import Footer from './components/Footer'
import SignUp from './SignUp_Login/SignUp'
import "./index.css"
import Login from './SignUp_Login/Login'

const App = () => {
  // States
  const [restaurants, setRestaurants] = useState([])
  const [page, setPage] = useState(0)
  const [loginPage, setLoginPage] = useState(0)
  // const [isLoggedIn, setIsLogged] = useState(false)
  
  // const baseURL = "https://restaurant-api.herokuapp.com/api/restaurants"
  const baseURL = "http://localhost:8000/api/restaurants"
  const signUpRoute = "http://localhost:8000/signup/"
  const loginRoute = "http://localhost:8000/login/"

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

  // Update restaurant
  const handleUpdate = (editRestaurant) => {
    console.log(editRestaurant)
    axios.put(baseURL + '/' + editRestaurant.id, editRestaurant)
      .then((response) => {
        getRestaurants()
      })
  }

  const handleNewUserSignUp = (newUser) => {
    console.log(`New user react side: ${newUser.username}`)
    axios.post(signUpRoute, newUser)
      .then(res => console.log(res))
      .catch(error => console.log(error));
  }

  const loginUser = (userInfo) => {
    console.log(userInfo)
    axios.post(loginRoute, userInfo)
      .then(res => console.log(res))
      .catch(error => console.log(error));
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
      {/* {
        isLoggedIn ? <Home/> : <SignUp/>
      } */}
      {
        loginPage === 0 ? <Login loginUser={loginUser}/> : <SignUp handleNewUserSignUp={handleNewUserSignUp} setLoginPage={setLoginPage}/>
      }
      {/* {page === 0 ? <Home setPage={setPage} restaurants={restaurants} handleDelete={handleDelete} handleUpdate={handleUpdate}/> : <></> } */}
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
