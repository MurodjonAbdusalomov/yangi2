import React from 'react'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


import Rasm1 from '../assets/rasm1.png'
import Rasm2 from '../assets/rasm2.png'
import Rasm3 from '../assets/rasm3.png'
import Rasm4 from '../assets/rasm4.png'
import Rasm5 from '../assets/rasm5.png'


const Section = () => {
    return (
        <div className='section' id='container'>
            <div className="sahifa1">
                <div className='name'>
                    <h2>Explore our wide variety of categories</h2>
                    <p>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new</p>
                </div>


                <div className='otaE'>
                    <Button className='eror2' startIcon={<ArrowBackIcon />} />
                    __ __ __ __

                    <Button className='eror2' startIcon={<ArrowForwardIcon />} />
                </div>


            </div>


            <div className="sahifa2">

                <div className='cardd'>
                    <img src={Rasm1} alt="" /> <br />
                   <div className='action'>
                   <p>Action</p>  
                   <ArrowForwardIcon/>
                   </div>
                </div>

                <div className='cardd'>
                <img src={Rasm2} alt="" />
                <div className='action'>
                   <p>Adventure</p>  
                   <ArrowForwardIcon/>
                   </div>
                </div>

                <div className='cardd'>
                <img src={Rasm3} alt="" />
                <div className='action'>
                   <p>Comedy</p>  
                   <ArrowForwardIcon/>
                   </div>
                </div>

                <div className='cardd'>
                <img src={Rasm4} alt="" /> 
                <div className='action'>
                   <p>Drama</p>  
                   <ArrowForwardIcon/>
                   </div>
                </div>

                <div className='cardd'>
                <img src={Rasm5} alt="" />
                <div className='action'>
                   <p>Horror</p>  
                   <ArrowForwardIcon/>
                   </div>
                </div>


            </div>




        </div>
    )
}

export default Section