import { useState } from "react"

const Login = ({ loginUser }) => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        password: '',
    })

    const handleChange = (e) => {
        setUserInfo({...userInfo, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        loginUser(userInfo)
    }

    return (
        <>
            <h2>Login Page</h2>
            <form className='text-center add-form w-25 my-5 mx-auto d-flex flex-column align-items-center' onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" onChange={handleChange}/>
                <br />
                <label htmlFor="address">Password: </label>
                <input type="text" name="password1" onChange={handleChange}/>
                <br />
                <input className='my-3 btn btn-lg btn-danger' type="submit"/>
            </form>
        </>
    )
}

export default Login