import React from 'react'
import Hero from './components/Home/Hero';
import Teacher from './components/Teacher';
import Radhanathstory from './components/Radhanathstory';
import Feature from './components/Feature';
import Sarila from './components/Sarila';
import Exprience from './components/Exprience';
import Signup from './components/Signup';
import Thought from './components/Thought';

const Home = () => {
    return (
        <>
            <Hero />
            <Teacher />
            <Feature />
            <Radhanathstory />
            <Sarila />
            <Exprience />
            <Signup />
            <Thought />
        </>
    )
}

export default Home
