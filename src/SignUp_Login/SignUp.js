import { useState } from "react"

const SignUp = ({ handleNewUserSignUp, setLoginPage }) => {
    const [newUser, setNewUser] = useState({
        username: '',
        password1: '',
        password2: ''
    })

    const handleChange = (e) => {
        setNewUser({...newUser, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleNewUserSignUp(newUser);
        setLoginPage(1)
    }

    return (
        <>
            <h2>Sign up Page</h2>
            <form className='text-center add-form w-25 my-5 mx-auto d-flex flex-column align-items-center' onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" onChange={handleChange}/>
                <br />
                <label htmlFor="address">Password: </label>
                <input type="text" name="password1" onChange={handleChange}/>
                <br />
                <label htmlFor="image">Confirm Password: </label>
                <input type="string" name="password2" onChange={handleChange}/>
                <br />
                <input className='my-3 btn btn-lg btn-danger' type="submit"/>
            </form>
        </>
    )
}

export default SignUp;