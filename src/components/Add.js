import {useState} from 'react'

const Add = (props) => {
    const [restaurant, setRestaurant] = useState({
        name: "",
        address: "",
        image: "",
        price: "",
        cuisine: "",
        number: 0
    })

    const handleChange = (event) => {
        setRestaurant({...restaurant, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleCreate(restaurant)
        props.setPage(0)
    }

    return (
        <>
        <br />
        <br />
            <form className='w-25 my-5 mx-auto d-flex flex-column align-items-center' onSubmit={handleSubmit}>
            <img class="mb-4" src="https://cdn-icons-png.flaticon.com/512/52/52172.png" alt="" width="72" height="57"></img>
            <h1 className="h3 mb-3 fw-normal">Add a Restuarant</h1>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" onChange={handleChange}/>
                <br />
                <label htmlFor="address">Address: </label>
                <input type="text" name="address" onChange={handleChange}/>
                <br />
                <label htmlFor="image">Image: </label>
                <input type="string" name="image" onChange={handleChange}/>
                <br />
                <label htmlFor="price">Price: </label>
                <input type="string" name="price" onChange={handleChange}/>
                <br />
                <label htmlFor="cuisine">Cuisine: </label>
                <input type="string" name="cuisine" onChange={handleChange}/>
                <br />
                <label htmlFor="number">Phone Number: </label>
                <input type="number" name="number" onChange={handleChange}/>
                <input className=' my-3 btn btn-lg btn-danger' type="submit"/>
            </form>
        </>
    )
}

export default Add