import React, { useState, useContext } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext.jsx'

const Navbar = () => {
    const [menu,setMenu] = useState("Home");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { cart } = useContext(StoreContext)

    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
    <div className='navbar'>
      <Link to="/" className='navbar_logo_container'>
        <img src={assets.logo} alt='Tomato' className='logo' />
      </Link>
      <ul className={`navbar_menu ${mobileMenuOpen ? "active" : ""}`} role="navigation" aria-label="Main navigation">
        <li>
          <Link to="/" className={menu === "Home" ? "active" : ""} onClick={closeMobileMenu}>Home</Link>
        </li>
        <li>
          <button onClick={() => { setMenu("Menu"); closeMobileMenu(); }} className={menu === "Menu" ? "active" : ""}>Menu</button>
        </li>
        <li>
          <button onClick={() => { setMenu("Mobile_app"); closeMobileMenu(); }} className={menu === "Mobile_app" ? "active" : ""}>Mobile App</button>
        </li>
        <li>
          <button onClick={() => { setMenu("Contact_us"); closeMobileMenu(); }} className={menu === "Contact_us" ? "active" : ""}>Contact Us</button>
        </li>
      </ul>
      <div className="navbar_right">
        <img src={assets.search_icon} alt='Search' className='search_icon' />
        <div className="navbar_search_icon">
          <Link to="/cart" aria-label="View cart" onClick={closeMobileMenu}>
            <img src={assets.basket_icon} alt='Cart' />
            {cart.length > 0 && <div className="dot" aria-hidden>{cart.reduce((s, i) => s + i.qty, 0)}</div>}
          </Link>
        </div>
        <Link to="/cart" className="cart-link" onClick={closeMobileMenu}>Cart</Link>
        <Link to="/placeorder" className='order_btn_link'>
          <button>Place Order</button>
        </Link>
        <div className={`hamburger ${mobileMenuOpen ? "active" : ""}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
