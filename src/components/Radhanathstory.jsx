import React from 'react'
import rimg1 from './assets/rns-young.jpg';
import rimg2 from './assets/rns-mic.jpg';
import rimg3 from './assets/rns-vrindavan.jpg';

const Radhanathstory = () => {
  return (
    <>
      <div className='r-story'>
        <div className='r-container'>
          <div className='r-content'>
            <h2>About</h2>
            <h3>Learn more about Radhanath Swami’s life <br/>story</h3>
            <p>From a young boy growing up in Chicago amongst the civil <br /> rights movement, to a world-wide leader of spiritual thought.</p>
          </div>
          <div className='r-image'>
            <img src={rimg1} />
            <img src={rimg2} />
            <img src={rimg3} />

          </div>
          <a href='http://localhost:3000/about'><button>GO ON THE JOURNEY</button></a>
        </div>

      </div>

    </>
  )
}

export default Radhanathstory
