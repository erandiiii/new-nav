import React from 'react'
import { navData, models } from './Data'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Megamenu = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,

    };
    return (
        <div className='mengamenu-container'>
            <div className="mm-left">
                {navData.map((categoryItem, index) => (
                    <div key={index} className="menu-category">
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
            <div className="mm-right">
                <h3> Models </h3>
                <Slider className='divi' {...settings}>
                    {models.map((model) => (
                        <div key={model.id} className="cardss">
                            <div className="card-image">
                                <img src={model.image} alt={model.name} />
                            </div>
                            <div className="card-details">
                                <h3>{model.name}</h3>
                                <div className='real-p'>
                                    <p className='category-item'>{model.category[0]}</p>
                                    <p className='category-item'>{model.category[1]}</p>
                                    <p className='category-item'>{model.category[2]}</p>
                                </div>
                                <p>{model.date}</p>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        </div>
    )
};



export default Megamenu