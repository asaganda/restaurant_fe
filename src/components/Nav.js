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
                    <li className="navbar-brand d-inline" onClick={() => showPage(0)}>Restaurant Reviewer</li>
                </div>
                <div className="dropdown">
                    <button className="btn menu-button dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Menu
                    </button>
                    <ul className="dropdown-menu">
                        <li><button className='dropdown-item' onClick={() => showPage(0)}>Home</button></li>
                        <li><button className='dropdown-item' onClick={() => showPage(1)}>Add </button></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
}


export default Nav