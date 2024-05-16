
import mediaimgs1 from './assets/follow-reader.webp'
import mediaimg2 from './assets/radhanathswami-tedx.webp'
import mediaimg3 from './assets/radhanath-swami-interview.webp'
import mediaimg4 from './assets/rast-meets-west-radhanath-swami.webp'



import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
const Media = () => {
    return (
        <>
            <div className='media'>
                <div className='media-container1'>
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            <SwiperSlide><img src={mediaimgs1} /></SwiperSlide>
                            <SwiperSlide><img src={mediaimg2} /></SwiperSlide>
                            <SwiperSlide><img src={mediaimg3} /></SwiperSlide>
                            <SwiperSlide><img src={mediaimg4} /></SwiperSlide>
                        </Swiper>
                        <a href='https://www.youtube.com/watch?v=JW1Am81L0wc&t=2s'><i class="fa-regular fa-circle-play"></i></a>
                </div>
            </div>
        </>
    )
}

export default Media
