import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import { food_list } from '../../assets/assets/frontend_assets/assets';
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = () => {
  const {Food_list} = useContext(StoreContext);

  return (
    <div className='food_display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food_display_list">
        {food_list.map((item,index)=>{
        return <FoodItem key={index} id={item.id} name = {item.name} discription = {item.description} 
        price = {item.price} image = {item.image}/>
        })}
      </div>
    </div>
  ) 
}

export default FoodDisplay
