import React from 'react'
import vaniimg from './assets/boximg1.jpg'
import vimg from './assets/vanioffer1.jpg'
import { Data } from './Data'
const Vani = () => {
    return (
        <div className='vani'>
            <div className='vani-banner'>
                <h1>VANI<br />
                    SCHOOL</h1>
                <p>Spiritual wisdom<br />
                    any time, any place</p>
            </div>
            <div className='vani-content'>
                <div className='vani-cont'>
                    <h1>WISDOM IN YOUR POCKET</h1>
                    <p>Vani is an online platform designed to guide you in your spiritual growth,<br /> holistic wellbeing and self-discovery journey. Offering immersive courses<br /> in yoga, meditation, Ayurveda, personal development, spirituality and <br />much more</p>
                    <p>Accessible to everyone worldwide, the mission of Vani School is to deliver <br />high quality courses and classes that can propel your spiritual journey at <br />your own pace.</p>
                    <p>Vani has courses lead by disciples and well-wishers of Radhanath Swami,<br /> detailed learning booklets, 1000+ members and live calls with teachers.
                    </p>
                    <div className='vani-btn'>
                        <button>VISIT WEBSITE</button>
                        <button>JOIN THE NEWSHELTER</button>
                    </div>
                </div>
                <div className='vani-img'>
                    <img src={vaniimg} />
                </div>
            </div>
            <div className='vani-offer'>
                <h1>WHAT VANI SCHOOL OFFERS</h1>
                <div style={{display:"flex" , justifyContent:'center', gap:"2rem", flexWrap:'wrap', paddingInline:'10rem'}} className='v-conteiner'>
                    {
                        Data.map((elem, index) => {
                            const { id, img, tital, description } = elem;
                            return (
                                
                                    <div  className='v-offer'>
                                        <img src={img} />
                                        <h2>{tital}</h2>
                                        <p>{description}
                                        </p>
                                    </div>
                            
                            )
                        })
                    }
                </div>
            </div>
            <div className='vani-footer'>
                <p>Real knowledge and education is not about storing <br/>masses of data in our brain; it means to have the<br/> wisdom to see every human being with equal<br/> vision.</p>
                <h2>RADHANATH SWAMI</h2>
            </div>
        </div>
    )
}

export default Vani
