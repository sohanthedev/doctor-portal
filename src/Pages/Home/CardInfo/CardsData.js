import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import CardInfo from './CardInfo';

const CardsData = () => {
    const cardsData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Lorem Ipsum is simply dummy text of the pri',
            icon: clock,
            bgClass: 'bg-primary'
        },
        {
            id: 2,
            name: 'Visit our location',
            description: 'Brooklyn, NY 10036, United States',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us now',
            description: '+000 123 456789',
            icon: phone,
            bgClass: 'bg-primary'
        },
    ]
    return (
        <div>
            
            {/* {
                cardsData.map(card=><CardInfo key={card.id} card={card}></CardInfo>)
            } */}

        </div>
    );
};

export default CardsData;