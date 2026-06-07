import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets/frontend_assets/assets'
import './Header.css'

const Header = () => {
  const scrollToMenu = () => {
    const target = document.getElementById('explore_menu')
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className='header' style={{ backgroundImage: `url(${assets.header_img})` }}>
      <div className='header_overlay' />
      <div className='header_contents'>
        <span className='eyebrow'>Food delivery made effortless</span>
        <h1>Explore local favorites and order in minutes</h1>
        <p>Discover the best restaurants, curated offers, and fast delivery with a polished experience that feels premium and reliable.</p>
        <div className='header_actions'>
          <button type='button' onClick={scrollToMenu}>Browse menu</button>
          <Link to='/cart' className='secondary_btn'>View cart</Link>
        </div>
        <div className='header_metrics'>
          <div>
            <strong>300+</strong>
            <span>Restaurants</span>
          </div>
          <div>
            <strong>4.9★</strong>
            <span>Average rating</span>
          </div>
          <div>
            <strong>Free</strong>
            <span>delivery above $20</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
