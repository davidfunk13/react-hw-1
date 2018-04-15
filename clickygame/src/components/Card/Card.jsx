import React from 'react';

const Card = props => {
    return (
        <div className='card'>
            <div className='card-img'>
                <img src={props.image} alt={props.name}/>
            </div>
        </div>
    )
}

export default Card;
