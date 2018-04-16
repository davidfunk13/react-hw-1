import React from 'react';
import './Card.css'
import cardImages from '../../cardImages.json'

const Card = props => {

    {
        return (
            <img onClick={() => props.shuffleCards(props)} id={props.id} src={props.path} alt={props.name} />
        )
    }

}

export default Card;
