import React from 'react';
import './Card.css';

export const Card = ({ monster }) => {
    return(
        <div className="card-container">
            <img alt="monsters" src={`https://robohash.org/${monster.id}?set=set3&size=180x180`}/>
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
        </div>
    )
}