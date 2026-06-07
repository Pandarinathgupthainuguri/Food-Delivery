import React, { useContext } from 'react'
import { assets } from '../../assets/assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext.jsx'

const FoodItem = ({ id, name, price, description, image }) => {
  const { addToCart } = useContext(StoreContext)

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
          <button
            aria-label={`Add ${name} to cart`}
            className='add-to-cart-btn'
            onClick={() => addToCart({ _id: id, name, price, image, description })}
          >
            <img src={assets.add_icon_green} alt="add" /> Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default FoodItem
