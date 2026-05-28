import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets/frontend_assets/assets';

function ExploreMenu() {
  return (
    <div className='expolre_menu' id='expolre_menu'>
        <h1>Explore our menu</h1>
        <p className='explore_menu_text'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to</p>
       <div className="explore_menu_list">
        {
            menu_list.map((item,idx)=>{
                return(
                    <div key={idx} className='explore_menu_list_item'>
                        <img src={item.menu_image}/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })
        }
       </div>
    </div>
  )
}

export default ExploreMenu