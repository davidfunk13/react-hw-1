import React from 'react';
import './Card.css'

const Card = props => {

        return (
            // <div id={props.id} className='image-container'>
                <img onClick={() => props.clickedTwice(props.id)} id={props.id} src={props.path} alt={props.name} />
            // </div>
        )
}

export default Card;
