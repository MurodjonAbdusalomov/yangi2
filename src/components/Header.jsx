import React from 'react'
import asosimg from '../assets/asosimg.png'
import Button from '@mui/material/Button';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const Header = () => {
  return (
    <div className='header' id='container'>
        <div className='imgg2'>
           {/* <img className='img2' src={asosimg} alt="" /> */}
        </div>

        <div className='header1'>
         <h2>The Best Streaming Experience</h2>
         <p>StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, <br /> including the latest blockbusters,  classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
         <Button startIcon={<PlayCircleIcon/>} variant="contained" className='eror'>Start Watching Now</Button>
        </div>
    </div>
  )
}

export default Header