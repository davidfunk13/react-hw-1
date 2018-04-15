import React from 'react';

const Card = props => {
    return (
        <div className='card'>
            <div className='card-img'>
                <img src={props.path} alt={props.id}/>
            </div>
        </div>
    )
}

export default Card;
