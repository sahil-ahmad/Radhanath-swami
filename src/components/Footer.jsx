import React from 'react'
import fimg from './assets/RNS-Logo.webp'

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='footer-container'>
          <div className='f-container1'>
            <img src={fimg} />
          </div>
          <div className='f-container2'>
            <h2>
              ABOUT<br/>
              GET INVOLVED<br/>
              CONTACT</h2>
          </div>
          <div className='f-container3'>
            <div className='f-content1'>
              <p>SUBSCRIBE</p>
              <h2>
                Receive updates straight to your inbox</h2>
            </div>
            <div className='f-content2'>
              <input type='text' placeholder='NAME' />
              <input type='text' placeholder='Email' />
              <div className='checkbox'>
                <input type='checkbox' />
                <p>Yes, I would like the Office of H.H. Radhanath Swami to send <br/>me emails about its activities. You can unsubscribe at any time.
                </p>
              </div>
              <div className='f-btn'>
                <button>SUBSCRIBE</button>
              </div>
              {/* <div className='share'>
                <h2></h2>
                <div className='icon'>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-youtube"></i>
                  <i class="fa-brands fa-twitter"></i>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
