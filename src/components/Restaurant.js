import React, { useState } from 'react'

const Restaurant = (props) => {
    
    const deleteRestaurant = (restaurant) => {
      props.handleDelete(restaurant)
    }

    return (
      <>
      <div className="card" >
        <img src={props.restaurant.image} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">Name: {props.restaurant.name}</h5>
        <p className="card-text"> Price: {props.restaurant.price}</p>
        <p className="card-text"> Cuisine: {props.restaurant.cuisine}</p>
        <p className="card-text"> Address: {props.restaurant.address}</p>
        <p className="card-text"> Phone Number: {props.restaurant.phone}</p>
      </div>
  </div>
      </>
    )
  }
  
  export default Restaurant
  