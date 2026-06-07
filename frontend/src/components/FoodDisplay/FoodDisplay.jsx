import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext.jsx'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category = 'All' }) => {
  const { food_list } = useContext(StoreContext)

  const list = category === 'All' ? food_list : food_list.filter(item => item.category === category)

  return (
    <div className='food_display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food_display_list">
        {list.map((item) => {
          return (
            <FoodItem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          )
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
