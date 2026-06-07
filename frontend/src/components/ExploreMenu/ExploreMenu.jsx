import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets/frontend_assets/assets';

function ExploreMenu({category,setCategory}) {
  return (
    <section className='explore_menu' id='explore_menu'>
        <h1>Explore our menu</h1>
        <p className='explore_menu_text'>Choose from a diverse menu featuring a delectable array of dishes, from cozy comfort food to fresh chef specials.</p>
       <div className="explore_menu_list">
        {
            menu_list.map((item,idx)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={idx} className='explore_menu_list_item'>
                        <img className={category==item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name}/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })
        }
       </div>
       <hr/>
    </section>
  )
}

export default ExploreMenu