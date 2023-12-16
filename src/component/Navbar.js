import React from 'react'
import { Link } from 'react-router-dom';
import "../Style/global.css";
import '../Style/general.css';
const Navbar = () => {
  return (
    <header>
    <img src="https://images.unsplash.com/photo-1601158935942-52255782d322?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxvZ298ZW58MHx8MHx8fDA%3D" alt="logo"/>
         <nav className='nav-section'>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/refer'}>Refer</Link></li>
                <li><Link to={'/transfer'}>Transfer</Link></li>
                <li><Link to={'/transaction-history'}>Transaction History</Link></li>
                <li><Link to={'/login'}>Login</Link></li>
                <li><Link to={'/register'}>Register</Link></li>
                <li><Link to={'/rewards'}>Rewards</Link></li>
            </ul>
        </nav>
    </header>       
  )
}

export default Navbar