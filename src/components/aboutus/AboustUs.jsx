import React from 'react'
import { Link } from 'react-router-dom'
// import './AboutUs.scss'

const AboustUs = () => {
    return (
        <div className='au-container'>
            <div className="au-text">
                <h1>ABOUT US</h1>
                <p>ModelKos is the leading interactive fashion database
                    connecting the world to models, creative talent, magazines,
                    and luxury and commercial brands. With 1.1 million unique
                    visits per month, the site stands as an essential tool to
                    attribute credit and source new talent.</p>
            </div>
            <div className="au-right">
                <div className="img-holder">
                    <div className="au-card1"></div>
                    <div className="au-card2"></div>
                </div>
                <Link></Link>
            </div>
        </div>
    )
}

export default AboustUs