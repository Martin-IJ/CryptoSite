import {FaBars, FaTimes} from 'react-icons/fa';
import React, {useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
  return (
    <div className='header'>
        <div className="container">
            <Link to='/'><h1>iCe<span className='primary'>Coin</span></h1></Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><a href="/">Home</a></li>
                <li><a href="/">Featured</a></li>
                <li><Link to='/crypto-calculator'>Calculate</Link></li>
                <li><a href="/">Contact</a></li>
            </ul>
            <div className="btn-group">
                <button className="btn">Connect Wallet</button>
            </div>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color:'#333'}} />) : (<FaBars size={20} style={{color:'#333'}} />)}
            </div>
        </div>
    </div>
  )
}

export default Navbar