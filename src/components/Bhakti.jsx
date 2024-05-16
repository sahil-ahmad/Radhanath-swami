
import spaceimg from './assets/tbc-inclass-yoga-meditation.jpg'
import tampleimg from './assets/radhanath-swami-bhakti-center-class.jpg'
import socialfrnd from './assets/rns-tbc-social-friends.jpg'
import communityimg from './assets/rns-tbc-friends-kirtan.jpg'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const Bhakti = () => {
  return (
    <>
      <div className='bhakti'>
        <div className='b-container1'>
          <h1>BHAKTI<br /> CENTER</h1>
          <p>Experience self transformation</p>
          <a href='https://www.youtube.com/watch?v=Sp3ov-OWvzM'><i class="fa-regular fa-circle-play"> </i>PLAY VIDEO</a>
        </div>
        <div className='b-container2'>
          <h1>A SPIRITUAL OASIS</h1>
          <p>We live in an age which grants us extraordinary conveniences and torrents of information. Yet the<br /> very technology designed for our well-being often serves only to isolate us from one another and<br /> distance us from the experience of all that is truly divine. The Bhakti Center was established by<br /> H.H. Radhanath Swami as an alternative experience for New Yorkers and for visitors from all over<br /> the world. It is a spiritual oasis in the jungle of Manhattan, a place to reconnect to community and<br /> to our true selves.</p>
          <p>Located on the Lower East Side of New York City, the Bhakti Center is a spiritual home for truth<br /> seekers; with a community devoted to sharing the experience of self-transformation through the<br /> timeless culture and practices of Bhakti. It’s a center of authentic learning, and a great place to meet<br /> new people, make lasting relationships, and find inspiration and support on the spiritual path.</p>
          <p>The Bhakti Center offers an amazing variety of classes, courses and events thats include yoga,<br /> meditation, wisdom and culture. A significant part of Bhakti Center’s ethos is to give back to the<br /> community through a number of social initiatives. It also provides subsidised or free classes and<br /> events to ensure that everyone has access to the learning and support available.</p>
          <a href='https://bhakticenter.org/'><button>VISIT WEBSITE</button></a>
          <button>GIVE BACK</button>
        </div>
        <div className='b-container3'>
          <h2>PATHWAYS</h2>
          <h1>THE FOUR<br /> AVENUES OF<br /> GROWTH</h1>

        </div>
        <div className='b-container4'>
          <div className='b-space-container'>
            <div className='b-space-img'>
              <img src={spaceimg} />
            </div>
            <div className='b-space-content'>
              <h1>FINDING YOUR SPACE</h1>
              <p>When you come to visit the Bhakti Center, you enter a sanctuary. Some of the features of the building include:</p>
              <p>State of the art, beautifully renovated yoga and meditation studios. Within them, sheltered from the whirlwind of Manhattan, one can find space and support to heal and grow.
              </p>
              <p>The Amrita Boutique store that provides a curated selection of products aimed at enriching ones bhakti lifestyle.</p>
              <p>New York #1 rated vegetarian restaurant Divya’s Kitchen – the perfect place to nourish yourself with spiritually-charged, plant-based food before and after events.</p>
              <p>A lovingly tended roof top garden featuring an array of plants, vegetables and flowers. The perfect eco-oasis for sunset yoga.</p>

            </div>
          </div>
          <div className='b-tample-city'>
            <div className='b-tample-content'>
              <h1>A TEMPLE IN THE CITY</h1>
              <p>Another unique feature of the Bhakti Center is the Temple room on the 3rd floor. A one-of-a-kind on the island of Manhattan, it offers an experience of worship within a traditional Vaishnava Hindu Temple. It is also a space to learn, with regular wisdom lectures and a library filled with ancient yogic texts.</p>
              <p>One can find a quiet space to sit and reflect or on certain evenings join in an uplifting experience of mantra meditation, also known as kirtan. Musicians are invited from all over New York and the world to lead this practice of singing sacred mantras in a community setting.</p>
            </div>
            <div className='b-tample-img'>
              <img src={tampleimg} />
            </div>
          </div>
        </div>
        <div className='b-container5'>
          <div className='b-cont5img'>
            <div className='overlay'>
              <h2>OFFERINGS</h2>
              <h1>GIVING BACK</h1>
            </div>
          </div>
          <div className='b-cont5-content'>
            <div className='b-5-content1'>
              <p>"What really impresses the hearts of people is not miraculous feats but<br /> genuine humility, integrity and a true sense of love achieved through service."</p>
              <h2>RADHANATH SWAMI</h2>
            </div>
            <div className='b-5-content2'>
              <div className='b-5-cont2-social-img'>
                <img src={socialfrnd} />
              </div>
              <div className='b-5-cont2-social-content'>
                <h1>SOCIAL INITATIVES</h1>
                <p>When you come to visit the Bhakti Center, you enter a sanctuary. Some of the features of the building include:</p>
                <p>State of the art, beautifully renovated yoga and meditation studios. Within them, sheltered from the whirlwind of Manhattan, one can find space and support to heal and grow.
                </p>
                <p>The Amrita Boutique store that provides a curated selection of products aimed at enriching ones bhakti lifestyle.</p>
                <p>New York #1 rated vegetarian restaurant Divya’s Kitchen – the perfect place to nourish yourself with spiritually-charged, plant-based food before and after events.</p>
                <p>A lovingly tended roof top garden featuring an array of plants, vegetables and flowers. The perfect eco-oasis for sunset yoga.</p>
              </div>
            </div>
            <div className='b-5-content3'>
              <div className='b-5-cont2-community-content'>
                <h1>COMMUNITY &<br/>
                  VOLUNTEERING</h1>
                <p>When you come to visit the Bhakti Center, you enter a sanctuary. Some of the features of the building include:</p>
                <p>State of the art, beautifully renovated yoga and meditation studios. Within them, sheltered from the whirlwind of Manhattan, one can find space and support to heal and grow.
                </p>
                <p>The Amrita Boutique store that provides a curated selection of products aimed at enriching ones bhakti lifestyle.</p>
                <p>New York #1 rated vegetarian restaurant Divya’s Kitchen – the perfect place to nourish yourself with spiritually-charged, plant-based food before and after events.</p>
                <p>A lovingly tended roof top garden featuring an array of plants, vegetables and flowers. The perfect eco-oasis for sunset yoga.</p>
              </div>
              <div className='b-5-cont2-community-img'>
                <img src={communityimg} />
              </div>

            </div>
            <div className='b-5-content4'>
              <button>VISIT WEBSITE</button>
              <button>DONATE</button>
            </div>
            <div className='b-5-content5'>
              
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Bhakti
