import React, { useEffect, useState } from "react";

import '../../Styles/StockCard.css';

import stockImg from '../../Assets/Images/mtg_stock_card_img.png';

const StockCard = (props) => {

    const card = props.card;
    const [styles, setStyles] = useState();

    useEffect(() => {
        if (card.imageUrl === undefined) {
            if (card.colors === undefined) {
                setStyles('Colorless');
            } else {
                if (card.colors.includes('White')) {
                    setStyles('White');
                } else if (card.colors.includes('Blue')) {
                    setStyles('Blue');
                } else if (card.colors.includes('Green')) {
                    setStyles('Green');
                } else if (card.colors.includes('Black')) {
                    setStyles('Black');
                } else if (card.colors.includes('Red')) {
                    setStyles('Red');
                } else if (card.colors.includes('White')) {
                    setStyles('white');
                }
            }
        }
    }, []);

    return (
        <section className={`stock-card__wrapper outter__${styles}`}>
            <section className={`stock-card__header inner__${styles}`}>
                <p>{card.name}<span style={{ float: 'right' }}>{card.manaCost}</span></p>
            </section>
            <section style={{ display: 'flex', justifyContent: 'center', background: 'black', width: '95%', margin: 'auto' }}>
                <img src={stockImg} style={{ height: '130px', width: '130px' }} alt='...' />
            </section>
            <section className={`stock-card__type inner__${styles}`}>
                <p>{card.type}<span style={{ float: 'right' }}>{card.set}</span></p>
            </section>
            <section className={`stock-card__details inner__${styles}`}>
                <p>{card.text}</p>
            </section>
            {card.types.includes('Creature') ?
                <section className={`stock-card__pow_tuf inner__${styles}`}>
                    <p>{card.power} / {card.toughness}</p>
                </section>
                : null}
        </section >
    )
}

export default StockCard;