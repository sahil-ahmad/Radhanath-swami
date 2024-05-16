import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/RNS-Logo.webp'
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [initiativesOpen, setInitiativesOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false); // Add state for sidebar

    const initListRef = useRef(null);

    // const toggleInitiatives = () => {
    //     setInitiativesOpen(!initiativesOpen);
    // };

    // const toggleSidebar = () => { // Function to toggle sidebar
    //     setSidebarOpen(!sidebarOpen);
    // };

    // const handleClickOutside = (event) => {
    //     if (initListRef.current && !initListRef.current.contains(event.target)) {
    //         setInitiativesOpen(false);
    //     }
    // };

    // useEffect(() => {
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, []);

    return (
        <>
            <div className='navbar'>
                <div className='logo'>
                    <Link to='/'><img src={logo} alt="Logo" /></Link>
                </div>
                <div className='nav'>
                    <Link to={'/about'}>
                        <a className='about-section'>
                            ABOUT
                        </a>
                    </Link>
                    <NavLink className='dropdown' >INITIATIVES
                    <i class="fa-solid fa-chevron-down"></i>
                        <div className='new-dropdown'  >
                            <Link to='/vani'>VANI SCHOOL</Link>
                            <Link to='/recovery' style={{lineHeight:'1.5rem'}}>RECOVERY ANNEX</Link>
                            <Link to='/bhakti'>BHAKTI YOGA</Link>
                            {/* <Link to='/goverdhan'>GOVERDHAN</Link>
                            <Link to='/hospital'>HOSPITAL</Link>
                            <Link to='/midday-meal'>MIDDAY MEAL</Link> */}

                        </div>
                    </NavLink>
                    <NavLink id='resources' className='dropdown1'>RESOURCES
                    <i class="fa-solid fa-chevron-down"></i>
                        <div className='new-dropdown1'>
                            <Link to='/books'>BOOKS</Link>
                            <Link to='/media'>MEDIA</Link>
                            <Link to='/teaching'>TEACHINGS</Link>
                        </div>
                    </NavLink>
                    <NavLink to='/get-involved'>GET INVOLVED</NavLink>
                    <NavLink to='/newsletter'>NEWSLETTER</NavLink>
                    <NavLink to='/contact'>CONTACT</NavLink>
                </div>
                <div className='icon' > {/* Add onClick handler */}
                    <i className="fa-solid fa-bars"></i>
                    <p>Menu</p>
                </div>
            </div>
            {sidebarOpen && (
                <div className='sidebar'>
                    {/* Sidebar content */}
                </div>
            )}

        </>
    );
};

export default Navbar;

