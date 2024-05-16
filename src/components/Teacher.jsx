import React from 'react'
import radhanath from './assets/radhanath-swami-mumbai.jpg'

const Teacher = () => {
  return (
    <>
      <div className='teacher'>
        <div className='t-container'>
          <div className='t-watch'>
            <h2>WATCH</h2>
            <h3>TEACHER<br/>
              AUTHOR<br/>
              ACTIVIST</h3>
            <p>An introduction to His<br/> Holiness Radhanath Swami</p>
          </div>
          <div className='t-video'>
            <img src={radhanath} />
            <a href='https://youtu.be/-6WBqc4nBOs'><i class="fa-regular fa-circle-play"></i></a>
          </div>
          <div className='t-content'>
            <p>
              True wisdom,<br/>
              True enlightenment…<br/>
              is to see every living<br/> being<br/>
              with equal vision.

            </p>
            <h3>RADHANATH SWAMI</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Teacher
