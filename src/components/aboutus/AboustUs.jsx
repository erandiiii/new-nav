import React from 'react'
import { Link } from 'react-router-dom'
import './AboutUs.scss';

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
                    <div className="au-card1">
                        <div className="card1-img"></div>
                        <div className="card1-content">
                            <h3>Dea Gashi</h3>
                            <div className="content-row">
                                <p>Model</p>
                                <span></span>
                                <p>Photography</p>
                                <span></span>
                                <p>Artist</p>
                            </div>
                            <h3>19 may 2022</h3>
                        </div>
                    </div>
                    <div className="au-card2">
                        <div className="card2-img"></div>
                        <div className="card2-content">
                            <h3>Dea Gashi</h3>
                            <div className="content2-row">
                                <p>Model</p>
                                <span></span>
                                <p>Photography</p>
                                <span></span>
                                <p>Artist</p>
                            </div>
                            <h3>19 may 2022</h3>
                        </div>
                    </div>
                </div>
                <Link></Link>
            </div>
        </div>
    )
}

export default AboustUs