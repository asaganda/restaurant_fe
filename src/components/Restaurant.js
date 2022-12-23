import React, { useState } from 'react'

const Restaurant = (props) => {
  

    return (
      <>
      <div class="card" >
        <img src={props.restaurants.image} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">Name: {props.restaurants.name}</h5>
        <p class="card-text"> Price: {props.restaurants.price}</p>
        <p class="card-text"> Cuisine: {props.restaurants.cuisine}</p>
        <p class="card-text"> Address: {props.restaurants.address}</p>
        <p class="card-text"> Phone Number: {props.restaurants.phone}</p>
      </div>
  </div>
      </>
    )
  }
  
  export default Restaurant
  