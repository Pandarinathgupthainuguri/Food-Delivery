import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext.jsx'

const FoodItem = ({ id, name, price, description, image }) => {
  const { addToCart, removeFromCart } = useContext(StoreContext)
  const [quantity, setQuantity] = useState(0)

  const handleAdd = () => {
    addToCart({ _id: id, name, price, image, description })
    setQuantity(quantity + 1)
  }

  const handleRemove = () => {
    if (quantity > 0) {
      removeFromCart(id)
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className='food-item'>
      <div className="food_item_img_container">
        <img className='food_item_img' src={image} alt={name} />
      </div>

      <div className="food_item_info">
        <div className="food_item_name_rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>
        <p className="food_item_desc">{description}</p>
        <div className='food_item_actions'>
          <p className='food_item_price'>${price}</p>
        <div className='quantity-controls'>
            <button
              aria-label={`Remove ${name} from cart`}
              className='qty-btn minus-btn'
              onClick={handleRemove}
              disabled={quantity === 0}
            >
              <span>−</span>
            </button>
            <span className='qty-display'>{quantity}</span>
            <button
              aria-label={`Add ${name} to cart`}
              className='qty-btn plus-btn'
              onClick={handleAdd}
            >
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodItem
