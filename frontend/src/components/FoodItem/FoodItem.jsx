import React from 'react'
import { assets } from '../../assets/assets/frontend_assets/assets'

const FoodItem = (id,name,price,description,image)  => {
  return (
    <div className='food-item'>

        <div className="food_item_img_container">
          <img className='food_item_img' src={Image} alt=''/>
        </div>

        <div className="food_item_info">
            <div className="food_item_name_rating">
                <p> {name} </p>
                <img src={assets.rating_starts}/> 
            </div>
            <p className="food_item_desc">{description}</p>
            <p className='food_item_prise'> ${price}</p>
        </div>   
    </div>
  )
}

export default FoodItem
