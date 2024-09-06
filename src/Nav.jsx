import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Nav.scss'
import logo1 from './assets/mk-logo.svg'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoIosArrowDown, IoMdArrowDropdown, IoMdArrowDropright, IoMdClose } from 'react-icons/io'
import Megamenu from './components/Megamenu'
import AboutUsMega from './components/AboutUsMega'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isBlack, setIsBlack] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isDdOpen, setIsDdOpen] = useState(false);
    const [isDdOpen1, setIsDdOpen1] = useState(false);

   

    const toggleDropdown = () => {
        setIsOpen1(!isOpen1);
    };
    const toggleDropdown2 = () => {
        setIsDdOpen(!isDdOpen);
    };
    const toggleDropdown3 = () => {
        setIsDdOpen1(!isDdOpen1);
    };


    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    const toggleBackground = () => {
        setIsBlack(!isBlack);
    };
    return (
        <div className='nav' >
            <div className="nav-container">
                <Link className='nav-logo' >
                    <img src={logo1} alt="" />
                    <h1>MODELKOS</h1>
                </Link>
                <div className="menu-links" >
                    <div className="nav-link">
                        <Link>Home</Link>
                    </div>
                    <div className="nav-link">
                        <Link>Our Work</Link>
                    </div>
                    <div className="nav-link">
                        <Link>About us</Link>
                        <IoMdArrowDropright  className='mm-dropdown'/>
                        <AboutUsMega/>
                    </div>
                    <div className="nav-link">
                        <Link>Models</Link>
                        <IoMdArrowDropright  className='mm-dropdown'/>
                        <Megamenu/>
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
                        <div className={`mn-logo ${isOpen ? 'open' : ''}`}>
                            <Link>
                                <img src={logo1} alt="" />
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
                                    <img src={logo1} alt="" />
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
                                    <div className='mnlink-icon'><IoIosArrowDown onClick={toggleDropdown} /></div>
                                    <ul className={`mnlist-dropdown ${isOpen1 ? 'open' : ''}`}>
                                        <li>
                                            <Link>Product & Service Websites</Link>
                                            <Link>eCommerce Sites</Link>
                                            <Link>Intranets & Web Portals</Link>
                                            <Link>UI/UX Design</Link>
                                            <Link>Mobile Web-Apps Design</Link>
                                            <Link>Content Strategy</Link>
                                            <Link>SEO</Link>
                                            <Link>Accessibility Services</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className='sb-link'>
                                    <Link><span>About us</span></Link>
                                    <div className='mnlink-icon'><IoIosArrowDown onClick={toggleDropdown2} /></div>
                                    <ul className={`mnlist-dropdown ${isDdOpen ? 'open' : ''}`}>
                                        <li>
                                            <Link>Mobile Apps</Link>
                                            <Link>Latest Works</Link>
                                            <Link>Branding</Link>
                                            <Link>Games</Link>
                                            <Link>Design</Link>
                                            <Link>Videos</Link>
                                            <Link>Social Media</Link>
                                            <Link>Entertainment</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className='sb-link'>
                                    <Link><span>Models</span></Link>
                                </li>
                                <li className='sb-link'>
                                    <Link><span>Academys</span></Link>
                                    <div className='mnlink-icon'><IoIosArrowDown onClick={toggleDropdown3} /></div>
                                    <ul className={`mnlist-dropdown ${isDdOpen1 ? 'open' : ''}`}>
                                        <li>
                                            <Link to='/'>About us</Link>
                                            <Link to='/'>Our team</Link>
                                            <Link>Clients</Link>
                                            <Link>Locations</Link>
                                            <Link>Awards</Link>
                                            <Link>Culture</Link>
                                            <Link>Achievements</Link>
                                            <Link>Our Academy</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className='sb-link'>
                                    <Link><span>Blog</span></Link>
                                </li>

                            </ul>
                            <hr className='thin-line' />
                        </div>
                        <div className="bottom">
                            <div className="fl-bottom">
                                <div className="bottom-links">
                                    <div className="bottom-top-link">
                                        <Link>
                                            <p>Apply now</p>
                                        </Link>
                                    </div>
                                    <div className="bottom-top-link">
                                        <Link>
                                            <p>Contacts</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="bottom-links2">
                                <Link>Support</Link>
                                <Link>Send Feedback</Link>
                                <Link>FAQs</Link>
                                <Link>Contact us</Link>
                                </div>
                            </div>
                            <div className="sl-bottom">
                             <p>@2024 ModelKos</p>
                             <div className='b-right'>
                                <button>
                                    <div></div>
                                    <div></div>
                                </button>
                                <div className='select-language'></div> 
                             </div>
                            </div>

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