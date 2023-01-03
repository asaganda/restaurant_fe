import React, { useState } from 'react'

const Restaurant = (props) => {
    
    const deleteRestaurant = (restaurant) => {
      props.handleDelete(restaurant)
    }

    return(
      <>
        <div className="card">
          <img src={props.restaurant.image} className="card-img-top" alt="restaurant"/>
          <div className="card-body">
            <h5 className="card-title">Name: {props.restaurant.name}</h5>
            <p className="card-text"> Cuisine: {props.restaurant.cuisine}</p>
            <button onClick={() => deleteRestaurant(props.restaurant)}>Delete</button>
            {/* <button onClick={}>Edit</button> */}
          </div>
        </div>
      </>
    )
}
  
export default Restaurant