import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StockCard from '../Other/StockCard';

const SearchCards = () => {

    const [res, setRes] = useState([{}]);
    const [cardName, setCardName] = useState('');

    useEffect(() => {

    }, []);

    const handleCardNameInput = (e) => {
        setCardName(e.target.value);
    }

    const handleCardNameSubmit = (e) => {
        if (e.key === 'Enter') {
            axios.get(`https://api.magicthegathering.io/v1/cards?name="${cardName}"`)
                .then((res) => { setRes(res.data); })
        }
    }

    return (
        <section className='search-cards'>
            <div>
                <input type="text" className="form-control search-cards__card-name" placeholder="Search..."
                    onChange={handleCardNameInput} value={cardName} onKeyDown={handleCardNameSubmit}
                />
            </div>
            <div className='card-search-results'>
                {res.cards ? res.cards.map((card) => {
                    return (
                        <section key={card.id}>
                            {card.imageUrl ? <img src={card.imageUrl} style={{ height: '311px', width: '223px', margin: '10px' }} /> : <StockCard card={card} />}
                        </section>
                    )
                }) : null}
            </div>

        </section>
    )
}

export default SearchCards;