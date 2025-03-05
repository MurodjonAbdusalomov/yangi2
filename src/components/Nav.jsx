import React from 'react'
import img from '../assets/image.png'
import SearchIcon from '@mui/icons-material/Search';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import MenuIcon from '@mui/icons-material/Menu';

const Nav = () => {
  return (
    <div id='container' className='asos'>

      <div className='asos1'>
        <img className='img' src={img} alt="" />
        <h1 className='h11'>Stream Vibe</h1>
      </div>

      <div className="a">
        <a href="">Home</a>
        <a href="">Movies & Shows</a>
        <a href="">Support</a>
        <a href="">Subscriptions</a>
      </div>


      <div className="ikonka">
        <div className="ikonka1">
          <SearchIcon />
          <AddAlertIcon />
        </div>
        <MenuIcon />
      </div>

    </div>
  )
}

export default Nav