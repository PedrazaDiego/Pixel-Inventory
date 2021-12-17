import { Link } from 'react-router-dom'
import React from 'react'

export default function NavBar() {
    return (
        <div>
            <nav className='nav-bar'>
                <Link to='/'> Inventory </Link>
                <Link to='/categories'> Categories </Link>
                <Link to='/providers'> Providers </Link>
            </nav>
        </div>
    )
}
