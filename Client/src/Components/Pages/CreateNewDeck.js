import React, { useEffect, useState } from 'react';
import '../../Styles/CreateNewDeck.css';
import axios from 'axios';
import { FaTrashAlt } from "react-icons/fa";

const CreateNewDeck = () => {

    const [res, setRes] = useState([{}]);
    const [cardName, setCardName] = useState('');
    const [deckList, setDeckList] = useState([]);

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

    const handleAddToDeck = (e, card) => {
        setDeckList([...deckList, card]);
    }

    return (
        <section className='create-new-deck'>

            <section className='create-new-deck__card-search'>
                <div>
                    <input type="text" className="form-control search-cards__card-name" placeholder="Search..."
                        onChange={handleCardNameInput} value={cardName} onKeyDown={handleCardNameSubmit}
                    />
                </div>
                <div className='card-search-results'>
                    {res.cards ? res.cards.map((card) => {
                        return (
                            <section key={card.id} className='card-view'>
                                {card.imageUrl ? <img src={card.imageUrl} style={{ height: '311px', width: '223px', margin: '10px' }} /> : null}
                                {card.imageUrl ? <button className='btn btn-primary' onClick={(e) => handleAddToDeck(e, card)}>Add to Deck</button> : null}
                            </section>
                        )
                    }) : null}
                </div>
            </section>

            <section className='create-new-deck__deck-list'>

                <h3>Creatures</h3>
                <hr />
                {deckList?.map((card) => {
                    console.log(card)
                    return (
                        <section key={card.id} className='create-new-deck__card-view'>
                            {card.types == "Creature" ?
                                <p>
                                    <img src={card.imageUrl} style={{ height: '62px', width: '45px', margin: '10px' }} />
                                    {card.name} - &#40;{card.set}&#41; - &#40;{card.types}&#41; - {card.manaCost}
                                    <FaTrashAlt style={{ color: 'red', marginLeft: '25px', cursor: 'pointer' }} onClick />
                                </p>
                                : null}
                        </section>
                    )
                })}

                <h3>Artifacts</h3>
                <hr />
                {deckList?.map((card) => {
                    return (
                        <section key={card.id} className='create-new-deck__card-view'>
                            {card.type === "Artifact" ?
                                <p>
                                    <img src={card.imageUrl} style={{ height: '62px', width: '45px', margin: '10px' }} />
                                    {card.name} - &#40;{card.set}&#41; - &#40;{card.types}&#41; - {card.manaCost}
                                    <FaTrashAlt style={{ color: 'red', marginLeft: '25px', cursor: 'pointer' }} onClick />
                                </p>
                                : null}
                        </section>
                    )
                })}

                <h3>Instants</h3>
                <hr />
                {deckList?.map((card) => {
                    return (
                        <section key={card.id} className='create-new-deck__card-view'>
                            {card.type === "Instant" ?
                                <p>
                                    <img src={card.imageUrl} style={{ height: '62px', width: '45px', margin: '10px' }} />
                                    {card.name} - &#40;{card.set}&#41; - &#40;{card.types}&#41; - {card.manaCost}
                                    <FaTrashAlt style={{ color: 'red', marginLeft: '25px', cursor: 'pointer' }} onClick />
                                </p>
                                : null}
                        </section>
                    )
                })}

                <h3>Sorceries</h3>
                <hr />
                {deckList?.map((card) => {
                    return (
                        <section key={card.id} className='create-new-deck__card-view'>
                            {card.type === "Sorcery" ?
                                <p>
                                    <img src={card.imageUrl} style={{ height: '62px', width: '45px', margin: '10px' }} />
                                    {card.name} - &#40;{card.set}&#41; - &#40;{card.types}&#41; - {card.manaCost}
                                    <FaTrashAlt style={{ color: 'red', marginLeft: '25px', cursor: 'pointer' }} onClick />
                                </p>
                                : null}
                        </section>
                    )
                })}

                <h3>Enchantments</h3>
                <hr />
                {deckList?.map((card) => {
                    return (
                        <section key={card.id} className='create-new-deck__card-view'>
                            {card.type === "Enchantment" ?
                                <p>
                                    <img src={card.imageUrl} style={{ height: '62px', width: '45px', margin: '10px' }} />
                                    {card.name} - &#40;{card.set}&#41; - &#40;{card.types}&#41; - {card.manaCost}
                                    <FaTrashAlt style={{ color: 'red', marginLeft: '25px', cursor: 'pointer' }} onClick />
                                </p>
                                : null}
                        </section>
                    )
                })}

                <h3>Lands</h3>
                <hr />
                {deckList?.map((card) => {
                    return (
                        <section key={card.id} className='create-new-deck__card-view'>
                            {card.types == "Land" ?
                                <p>
                                    <img src={card.imageUrl} style={{ height: '62px', width: '45px', margin: '10px' }} />
                                    {card.name} - &#40;{card.set}&#41; - &#40;{card.types}&#41; - {card.manaCost}
                                    <FaTrashAlt style={{ color: 'red', marginLeft: '25px', cursor: 'pointer' }} onClick />
                                </p>
                                : null}
                        </section>
                    )
                })}

            </section>

        </section>
    )
}

export default CreateNewDeck;