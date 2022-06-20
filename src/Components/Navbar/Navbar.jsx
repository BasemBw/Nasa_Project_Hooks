import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <Fragment>
            <nav className="navbar sticky-top navbar-expand-lg bg-dark">
                <Link className='nav-link' to="/"><h3>Home</h3></Link>
                <Link className='nav-link' to="/Search"><h3>Search</h3></Link>
                <Link className='nav-link' to="/Favorites"><h3>Favorites</h3></Link>
                <div className='image ms-auto mb-2 mb-lg-0'>
                    <img alt='nasa' width='60px' height='55px' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png'} />
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar


