import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InfoIcon from '@mui/icons-material/Info';



const Footter = () => {
    return (
        <div id='container'>

            <div className="fotter">


                <div>
                    <h4>Home</h4>
                    <p>Categories</p>
                    <p>Devices</p>
                    <p>Pricing</p>
                    <p>FAQ</p>
                </div>

                <div>
                    <h4>Movies</h4>
                    <p>Gernes</p>
                    <p>Trending</p>
                    <p>New Release</p>
                    <p>Popular</p>
                </div>

                <div>
                    <h4>Shows</h4>
                    <p>Gernes</p>
                    <p>Trending</p>
                    <p>New Release</p>
                    <p>Popular</p>
                </div>

                <div>
                    <h4>Support</h4>
                    <p>Contact Us</p>
                </div>

                <div>
                    <h4>Subscription</h4>
                    <p>Plans</p>
                    <p>Features</p>
                </div>

                <div>
                    <h4>Connect With Us</h4>
                    <FacebookIcon />
                    <TwitterIcon />
                    <InfoIcon />
                </div>


            </div>

<hr className='hr'/>
            <div className='f2'>
<div className="sss">
                <p>@2023 streamvib, All Rights Reserved</p>
            </div>

                <div>
                    <a href="">Terms of Use</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Cookie Policy</a>
                </div>
            </div>

            
        </div>
    )
}

export default Footter