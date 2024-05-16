import React from 'react'
import recoveryimg from './assets/TRA-Icon.jpg'
import { Data } from './Data'

const Recovery = () => {
    return (
        <>
            <div className='recovey'>
                <div className='recovery-container1'>
                    <h1>THE<br />RECOVERY<br /> ANNEX</h1>
                    <p>Healing and Transformation for anyone <br />struggling with Addictions of all kinds</p>
                </div>
                <div className='recovery-container2'>
                    <div className='r-content2'>
                        <h1>BHAKTI-INSPIRED RECOVERY</h1>
                        <p>The Recovery Annex is a compassion-driven program that blends the<br /> time-honored wisdom of the 12-step AA program with the profound<br /> spiritual insights of the Bhakti tradition. It offers a safe and supportive<br /> environment where our clients can explore their unique path towards<br /> recovery.</p>
                        <p>The essence of the fellowship is simplicity and inclusivity. The only<br /> prerequisite for joining is a sincere longing for recovery. The Recovery<br /> Annex embraces individuals from all walks of life, recognising that the<br />desire for healing transcends all boundaries. </p>
                        <button>VISIT WEBSITE</button>
                        <button>DONATE</button>

                    </div>
                    <div className='r-img2'><img src={recoveryimg} /></div>
                </div>
                <div className='recovery-container3'>
                    <div className='rcimg-container' style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                        {
                            Data.map((elem, index) => {
                                const { id, rcimg, rctital, rcdescription } = elem;
                                return (
                                    <div className='rc' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                                        <img src={rcimg} />
                                        <h2>{rctital}</h2>
                                        <p>{rcdescription}
                                        </p>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
                <div className='recovery-container4'>
                    <p>"We should be in harmony with our<br /> own consciousness; our mind, body,<br /> and soul should be one in interest<br /> and in purpose. And in that unified<br /> condition, we can actually express<br /> that natural innate love that we have<br /> found in our own life in everything<br /> we do in the world."</p>
                    <h2>RADHANATH SWAMI</h2>
                </div>

            </div>
        </>
    )
}

export default Recovery
