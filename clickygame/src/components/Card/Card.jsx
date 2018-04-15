import React from 'react';
import './Card.css'
import cardImages from '../AppContainer/cardImages.json'
 const clickCard = (cardImages) => {
    console.log('clicked')
};

const Card = props => {

    {
        return (
            <img onClick={props.clickCard} id={props.id} src={props.path} alt={props.name} />
        )
    }

}

export default Card;
