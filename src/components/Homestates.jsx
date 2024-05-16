import React from 'react'
import stateimg1 from './assets/Radhanath-Swami-Feeding-Children-copy.webp'

const Homestates = () => {
    
    return (
        <>
            <div className='homestate'>
                <div className='state-container'>
                    <div className='state-list'>
                        <h2>TACKLING HUNGER & EDUCATION</h2>
                        <h2>LEADING ECO SUSTAINABILITY</h2>
                        <h2>BLINDNESS EPIDEMIC</h2>
                        <h2>COVID MEALS RELIEF</h2>
                        <h2>REVOLUTIONARY, HOLISTIC HEALTHCARE</h2>
                        <h2>GUIDING ECO POLICY</h2>
                        <h2>MENTAL HEALTH & RECOVERY</h2>
                        <h2>EMPOWERING WOMEN & YOUTH</h2>
                        <h2>UPLIFTING AGRICULTURAL COMMUNITIES</h2>
                    </div>
                    <section className='state-content1'>
                        <div className='stateimg'>
                            <img src={stateimg1} />
                        </div>
                        <div className='statecontent'>
                            <h2>TACKLING HUNGER & EDUCATION</h2>
                            <ul>
                                <li>The Midday Meals Project serves food to school children to combat poverty, malnutrition & illiteracy.</li>
                                <li>4 billion+ meals served since inception.</li>
                                <li>1.2 million meals served daily in schools across India</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Homestates
