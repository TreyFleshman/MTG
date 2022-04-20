import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StockCard from '../Other/StockCard';
import DropDownColorFilter from '../Other/DropDownColorFilter';

const Homepage = () => {

    const [res, setRes] = useState([{}]);
    const [page, setPage] = useState(1);

    const [filter, setFilter] = useState('');

    useEffect(() => {
        axios.get(`https://api.magicthegathering.io/v1/cards?set=neo&colors=${filter}&page=${page}&pageSize=12`)
            .then((res) => { setRes(res.data); })
    }, [page,filter]);

    const handleOnPageNext = () => {
        setPage(page + 1);
    }

    const handleOnPagePrev = () => {
        if (page !== 1) {
            setPage(page - 1);
        }
    }

    return (
        <section className='homepage'>
            <h1 style={{ textAlign: 'center' }}>New Set! Kamigawa: Neon Dynasty</h1>
            <DropDownColorFilter filter={filter} setFilter={setFilter}/>
            <section className='homepage__cards'>
                {res.cards ? res.cards.map((card) => {
                    return (
                        <section key={card.id}>
                            {card.imageUrl ? <img src={card.imageUrl} style={{ height: '311px', width: '223px', margin: '10px' }} /> : <StockCard card={card} />}
                        </section>
                    )
                }) : null}
            </section>

            <section className='btn__section'>
                <button className='btn btn-primary prev__btn' onClick={handleOnPagePrev}>Prev</button>
                <button className='btn btn-primary next__btn' onClick={handleOnPageNext}>Next</button>
            </section>

        </section>
    )
}

export default Homepage;