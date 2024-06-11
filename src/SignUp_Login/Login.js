import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Login = ({ axios, loginRoute }) => {
    const navigate = useNavigate();
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

    const loginUser = (userInfo) => {
        console.log(userInfo)
        axios.post(loginRoute, userInfo, {
            withCredentials: true,
        })
            .then(res => {
                console.log(res)
                navigate('/home');
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <h2>Login Page</h2>
            <form className='text-center add-form w-25 my-5 mx-auto d-flex flex-column align-items-center' onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" onChange={handleChange}/>
                <br />
                <label htmlFor="address">Password: </label>
                <input type="text" name="password" onChange={handleChange}/>
                <br />
                <button className='my-3 btn btn-lg btn-danger' type="submit">Login</button>
                <Link to="/signup">Sign Up</Link>
            </form>
        </>
    )
}

export default Login