import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext.jsx'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart, changeQty, removeFromCart } = useContext(StoreContext)

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0)

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <Link to="/">Continue shopping</Link>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item._id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-img" />
            <div className="cart-item-info">
              <p className="cart-item-name">{item.name}</p>
              <p className="cart-item-price">${item.price}</p>
              <div className="cart-item-controls">
                <button aria-label={`Decrease ${item.name}`} onClick={() => changeQty(item._id, -1)}>-</button>
                <span aria-live="polite">{item.qty}</span>
                <button aria-label={`Increase ${item.name}`} onClick={() => changeQty(item._id, 1)}>+</button>
                <button className="remove-btn" onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-summary">
        <p>Total: ${total.toFixed(2)}</p>
        <Link to="/placeorder">
          <button className="checkout-btn">Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  )
}

export default Cart
