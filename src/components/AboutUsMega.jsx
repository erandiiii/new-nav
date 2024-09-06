import React from 'react'
import { aboutUs } from './Data'

const AboutUsMega = () => {
    return (
        <div className="au-mm-container">
            <div className="am-left">
                {aboutUs.map((categoryItem, index) => (
                    <div key={index} className="am-category">
                        <h3>{categoryItem.category}</h3>
                        <ul>
                            {categoryItem.links.map((linkItem, linkIndex) => (
                                <li key={linkIndex}>
                                    <a href={`/${linkItem.name.toLowerCase().replace(/\s+/g, '-')}`}>
                                        {linkItem.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="am-right">
                <div className='top'>
                <div className='am-img1'></div>
                <div className="am-img2"></div>
                </div>
                
                <button>About us</button>
            </div>
        </div>
    )
}

export default AboutUsMega