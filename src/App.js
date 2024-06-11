import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import ProtectedRoute from './SignUp_Login/ProtectedRoute'
import { AuthProvider } from './SignUp_Login/AuthContext'
// import { AuthContext } from './SignUp_Login/AuthContext'

const App = () => {
  // States
  const [restaurants, setRestaurants] = useState([])
  const [page, setPage] = useState(0)
  // const [loginPage, setLoginPage] = useState(0)
  // const { navigate } = useNavigate()

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

  useEffect(() => {
  getRestaurants()
  }, [])


  return (
    <AuthProvider>
      <BrowserRouter>
        <header>
          <Routes>
            <Route path="/login" element={<Nav setPage={setPage}/>}></Route>
            <Route path="/signup" element={<Nav setPage={setPage}/>}></Route>
          </Routes>
        </header>
        <main className="main container-fluid">
        {/* {
          isLoggedIn ? <Home/> : <SignUp/>
        } */}
        {/* {
          loginPage === 0 ? <Login loginUser={loginUser}/> : <SignUp handleNewUserSignUp={handleNewUserSignUp} setLoginPage={setLoginPage}/>
        } */}
        {/* {page === 0 ? <Home setPage={setPage} restaurants={restaurants} handleDelete={handleDelete} handleUpdate={handleUpdate}/> : <></> } */}
        {/* {page === 1 ? 
        <>
          <Add handleCreate={handleCreate} setPage={setPage}/> 
        </>
        :
        <></> } */}
        {/* Route for /login
          Place link inside here for route to /signup
        Route for /home *protected view* */}
          <Routes>
            <Route path="/login" element={<Login axios={axios} loginRoute={loginRoute}/>}></Route>
            <Route path="/signup" element={<SignUp axios={axios} signUpRoute={signUpRoute}/>}></Route>
            <Route path="/home" element={<ProtectedRoute />}>
              <Route index element={<Home setPage={setPage} restaurants={restaurants} handleDelete={handleDelete} handleUpdate={handleUpdate} />} />
            </Route>
            {/* <ProtectedRoute path="/home" element={<Home setPage={setPage} restaurants={restaurants} handleDelete={handleDelete} handleUpdate={handleUpdate}/>}/> */}
          </Routes>
        </main>
        <Routes>
          <Route path="/login" element={<Footer/>}></Route>
          <Route path="/signup" element={<Footer/>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
