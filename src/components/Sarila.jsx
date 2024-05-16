import React from 'react'
import simg1 from './assets/srila-prabhupada-rns.jpg'
import simg2 from './assets/rns-smile-line-new.webp'
const Sarila = () => {
    return (
        <div>
            <div className='srila'>
                <div className='s-container'>
                    <div className='s-content'>
                        <h2>FEATURED</h2>
                        <h1>SRILA PRABHUPADA <br />
                            & BHAKTI YOGA</h1>
                        <p>Discover Radhanath Swami's teacher, Srila<br /> Prabhupada, who introduced him to the path of<br /> Divine Love known as 'Bhakti Yoga', a practice<br /> that has been passed down by saints and sages over <br />thousands of years.</p>
                        <div className='btn'>
                            <button>SRILA PRUBHUPADA</button>
                           <a href='http://localhost:3000/bhakti'> <button>BHAKTI YOGA</button></a>
                        </div>

                    </div>
                    <div className='s-img'>
                        <img src={simg1} />
                    </div>

                </div>
                <div className='s-img2'>
                    <div className='overlay'>
                        
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Sarila
