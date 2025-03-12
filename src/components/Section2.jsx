import React from 'react'
import Smart from '../assets/smart.png'
import Tab from '../assets/tab.png'
import Tv from '../assets/tv.png'
import Nout from '../assets/nout.png'
import Game from '../assets/game.png'
import Vr from '../assets/vr.png'




const Section2 = () => {
    return (
        <div id='container'>

            <div className="almaz">
                <h2>We Provide you streaming experience across various devices.</h2>
                <p>With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.</p>
            </div>



            <div className='almaz2'>

                <div className='almaz22'>
                    <div>
                        <img src={Smart} alt="" />
                        <h3>Smartphones</h3>
                    </div>
                    <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                </div>

                <div className='almaz22'>
                    <div>
                        <img src={Tab} alt="" />
                        <h3>Tablet</h3>
                    </div>
                    <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                </div>

                <div className='almaz22'>
                    <div>
                        <img src={Tv} alt="" />
                        <h3>Smart TV</h3>
                    </div>
                    <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                </div>

                <div className='almaz22'>
                    <div>
                        <img src={Nout} alt="" />
                        <h3>Laptops</h3>
                    </div>
                    <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                </div>

                <div className='almaz22'>
                    <div>
                        <img src={Game} alt="" />
                        <h3>VR Headsets </h3>
                    </div>
                    <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                </div>

                <div className='almaz22'>
                    <div>
                        <img src={Vr} alt="" />
                        <h3>Smartphones</h3>
                    </div>
                    <p>StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store</p>
                </div>

            </div>



        </div>
    )
}

export default Section2