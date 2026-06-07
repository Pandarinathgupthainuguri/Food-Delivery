import React, { useState, useContext } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext.jsx'

const Navbar = () => {
    const [menu,setMenu] = useState("Home");
  const { cart } = useContext(StoreContext)

  return (
    <div className='navbar'>
      <Link to="/">
        <img src={assets.logo} alt='Tomato' className='logo' />
      </Link>
      <ul className="navbar_menu" role="navigation" aria-label="Main navigation">
        <li>
          <Link to="/" className={menu === "Home" ? "active" : ""}>Home</Link>
        </li>
        <li>
          <button onClick={() => setMenu("Menu")} className={menu === "Menu" ? "active" : ""}>Menu</button>
        </li>
        <li>
          <button onClick={() => setMenu("Mobile_app")} className={menu === "Mobile_app" ? "active" : ""}>Mobile App</button>
        </li>
        <li>
          <button onClick={() => setMenu("Contact_us")} className={menu === "Contact_us" ? "active" : ""}>Contact Us</button>
        </li>
      </ul>
      <div>
        <div className="navbar_right">
          <img src={assets.search_icon} alt='Search' />
          <div className="navbar_search_icon">
            <Link to="/cart" aria-label="View cart">
              <img src={assets.basket_icon} alt='Cart' />
              {cart.length > 0 && <div className="dot" aria-hidden>{cart.reduce((s, i) => s + i.qty, 0)}</div>}
            </Link>
          </div>
          <Link to="/cart" className="cart-link">Cart</Link>
          <Link to="/placeorder">
            <button>Place Order</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
