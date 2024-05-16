import React from 'react'
import Signupimg from './assets/notebook-phone.jpg'

const Signup = () => {
    return (
        <>
            <div className='signup'>
                <div className='sign-img'>
                    <img src={Signupimg} />
                </div>
                <div className='sign-content'>
                    <h2>NEWSLETTER</h2>
                    <h1>SIGN UP</h1>
                    <p>to receive regular updates</p>
                    <div className='input'>
                        <input type='text' placeholder='FIRST NAME*'/>
                        <input type='text' placeholder='EMAIL'/>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
