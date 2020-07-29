import React from 'react';
import { Card } from '../Card/Card';

import './CardList.css';

export const CardList = ({monsters}) => {
    const cardArray = monsters.map(monster => {
        return <Card key={monster.id} monster={monster}/>
    })
    return(
        <div className="card-list">
            {cardArray}
        </div>
    )
}