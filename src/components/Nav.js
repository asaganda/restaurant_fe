import React, { useState } from 'react'

const Nav = (props) => {
    const showPage = (num) => {
      props.setPage(num)
    }

    return (
      <>
            <nav className="navbar bg-light fixed-top">
                <div className="container-fluid">
                <button>Home</button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <button onClick={() => showPage(0)}>Home</button>
                                </li>
                                <li className="nav-item">
                                    <button onClick={() => showPage(1)}>Add Restaurant</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
    </>
    )
}
  
  export default Nav
  