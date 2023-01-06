import React, { useState } from 'react'

const Nav = (props) => {


    const showPage = (num) => {
    props.setPage(num)
    }

    return (
    <>


<nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
        <div>
            <img className="mb-4 nav-logo" src="https://cdn-icons-png.flaticon.com/512/52/52172.png" alt="" onClick={() => showPage(0)}></img>
            <a className="navbar-brand" href="#" onClick={() => showPage(0)}>Restaurant Reviewer</a>
        </div>
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
            </button>
            <ul className="dropdown-menu">
                <li><a className='dropdown-item' onClick={() => showPage(0)}>Home</a></li>
                <li><a className='dropdown-item' onClick={() => showPage(1)}>Add </a></li>
            </ul>
        </div>
    </div>
</nav>
    </>
    )
}


export default Nav