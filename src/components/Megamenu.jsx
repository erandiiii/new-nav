import React from 'react'
import { navData, models } from './Data'
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';


const Megamenu = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 2 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 2 },
    ];

    const CustomArrow = ({ type, onClick, isEdge }) => {
        return (
            <div
                onClick={onClick}
                className={`arrow-button ${type}`}
                style={{
                    background: "white",
                    border: "1px solid black",
                    width: "15px",
                    height: "15px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: isEdge ? "not-allowed" : "pointer",
                }}
            >
                <span style={{ color: "black", fontSize: "10px" }}>
                    {type === 'next' ? '>' : '<'}
                    
                </span>
            </div>
        );
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
                <div className='top-right'>
                    <h3> Models </h3>
                    <Link>View all &gt;</Link>
                </div>
                <Carousel className='divi'
                pagination={true} 
                    breakPoints={breakPoints}
                    renderArrow={({ type, onClick, isEdge }) => (
                        <CustomArrow type={type} onClick={onClick} isEdge={isEdge} />
                    )}
                >
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
                                <p className='date'>{model.date}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>

            </div>
        </div>
    )

};

export default Megamenu