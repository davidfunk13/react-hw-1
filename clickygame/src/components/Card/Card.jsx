import React from 'react';
import './Card.css'

const Card = props => {
    return (
                    <img id={props.id} src={props.path} alt={props.name} />
    )
}

export default Card;
