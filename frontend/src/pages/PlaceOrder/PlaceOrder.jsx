import React, { useContext, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext.jsx'

const PlaceOrder = () => {
  const { cart, clearCart } = useContext(StoreContext)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', address: '', email: '' })

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app you'd send order to backend here
    clearCart()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="order-confirmation">
        <h2>Thank you — your order is placed!</h2>
        <p>We will contact you at {form.email} if needed.</p>
      </div>
    )
  }

  return (
    <div className="place-order-page">
      <h2>Place Order</h2>
      <div className="order-layout">
        <form className="order-form" onSubmit={handleSubmit} aria-label="Place order form">
          <label>
            Name
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Address
            <textarea name="address" value={form.address} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </label>
          <button type="submit">Place Order — ${total.toFixed(2)}</button>
        </form>

        <aside className="order-summary">
          <h3>Order Summary</h3>
          {cart.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <ul>
              {cart.map((i) => (
                <li key={i._id}>{i.name} x {i.qty} — ${ (i.price * i.qty).toFixed(2) }</li>
              ))}
            </ul>
          )}
          <p className="order-total">Total: ${total.toFixed(2)}</p>
        </aside>
      </div>
    </div>
  )
}

export default PlaceOrder
