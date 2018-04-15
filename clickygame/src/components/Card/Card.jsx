import React from 'react';
import './Card.css'
import cardImages from '../AppContainer/cardImages.json'

const Card = props => {

    {
        return (
            <img onClick={() => props.clickCard(props.id)} id={props.id} src={props.path} alt={props.name} />
        )
    }

}

export default Card;
