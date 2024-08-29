import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Nav.scss'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoIosArrowDown, IoMdClose } from 'react-icons/io'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isBlack, setIsBlack] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    const toggleBackground = () => {
        setIsBlack(!isBlack);
    };
    return (
        <div className='nav'>
            <div className="nav-container">
                <Link className='nav-logo'>
                    <h1>MODELKOS</h1>
                </Link>
                <div className="menu-links">
                    <div className="nav-link">
                        <Link>Home</Link>
                    </div>
                    <div className="nav-link">
                        <Link>Our Work</Link>
                    </div>
                    <div className="nav-link">
                        <Link>About us</Link>
                    </div>
                    <div className="nav-link">
                        <Link>Models</Link>
                    </div>
                    <div className="nav-link">
                        <Link>Academy</Link>
                    </div>
                    <div className="nav-link">
                        <Link>Blog</Link>
                    </div>
                </div>
                <div className="nav-auth">
                    <div className="auth-link">
                        <Link>
                            <p>Apply now</p>
                        </Link>
                    </div>
                    <div className="auth-link1">
                        <Link>
                            <p>Contacts</p>
                        </Link>
                    </div>
                </div>
                <div className="mobile-nav">
                    <div className="mn-container">
                        <div className='mn-logo'>
                            <Link>
                                <h1>MODELKOS</h1>
                            </Link>
                        </div>
                        <button className='hamb-button' onClick={() => {

                            toggleSidebar();
                            toggleBackground();
                        }}>
                            <RxHamburgerMenu />
                        </button>
                    </div>
                    <div className={`sidebar ${isOpen ? 'open' : ''}`}>                      
                        <div className="top">
                        <div className='sb-logo'>
                            <Link>
                                <h1>MODELKOS</h1>
                            </Link>
                            <button className="close-btn" onClick={() => {
                                toggleSidebar();
                                toggleBackground();
                            }}>
                                <IoMdClose fontSize={25}

                                />
                            </button>
                        </div>
                            
                            <ul className='mn-list'>
                                <li className='sb-link'>
                                    <Link><span>Home</span></Link>
                                </li>
                                <li className='sb-link'>
                                    <Link><span>Our Work</span></Link>
                                    <div className='mnlink-icon'><IoIosArrowDown /></div>
                                    <ul className='mnlist-dropdown'></ul>
                                </li>
                                <li className='sb-link'>
                                    <Link><span>About us</span></Link>
                                    <div className='mnlink-icon'><IoIosArrowDown /></div>
                                    <ul className='mnlist-dropdown'></ul>
                                </li>
                                <li className='sb-link'>
                                    <Link><span>Models</span></Link>
                                </li>
                                <li className='sb-link'>
                                    <Link><span>Academys</span></Link>
                                    <div className='mnlink-icon'><IoIosArrowDown /></div>
                                    <ul className='mnlist-dropdown'></ul>
                                </li>
                                <li className='sb-link'>
                                    <Link><span>Blog</span></Link>
                                </li>
                                <hr />
                            </ul>
                        </div>
                        <div className="bottom">

                        </div>
                    </div>
                    <div className={`mn-background ${isBlack ? 'open' : ''}`} >
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Nav