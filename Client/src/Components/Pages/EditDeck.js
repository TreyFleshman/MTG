import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../Styles/CreateNewDeck.css';
import { FaTrashAlt } from "react-icons/fa";
import { DeckData } from '../../Models/deck.model';
import { CardData } from '../../Models/card.model';
import { DECK_API } from '../../Services/decks.connectToDB';

const EditDeck = () => {

    const [res, setRes] = useState([{}]);
    const [cardName, setCardName] = useState('');
    const [deckID, setDeckID] = useState();
    const [deckList, setDeckList] = useState([]);
    const [lands, setLands] = useState(1);

    useEffect(() => {
        const currDeckID = window.location.href.split(':').pop();
        setDeckID(currDeckID);
        DECK_API.findDeck(currDeckID)
            .then((res) => setDeckList(res))
    }, [deckList]);

    const handleCardNameInput = (e) => {
        setCardName(e.target.value);
    }

    const handleCardNameSubmit = (e) => {
        if (e.key === 'Enter') {
            axios.get(`https://api.magicthegathering.io/v1/cards?name="${cardName}"`)
                .then((res) => { setRes(res.data); })
        }
    }

    const shiftString = (type) => {
        if(type.split(' — ').shift() === 'Basic Land') {
            return type.split(' — ').shift().split('Basic ').pop().toLowerCase() + 's';
        } else {
            return type.split(' — ').shift().toLowerCase() + 's';
        }
    }

    const handleAddToDeck = async (e, card) => {
        const currCard = new CardData(card.id, card.name, card.set, card.cmc, card.imageUrl, card.manaCost, card.text, card.type, card.types);
        const currCardType = shiftString(card.type);
        if(deckList[currCardType].some(card => card.id === currCard.id)){
            alert('Card Already Added');
        }else {
            setDeckList(deckList[currCardType].push(currCard));
            const currentDeck = await DECK_API.findDeck(deckID);
            currentDeck[currCardType].push(currCard);
            DECK_API.editDeck(currentDeck);
        }
    }

    const handleAddLands = (e) => {
        setLands(e.target.value);
    }

    const handleRemoveFromDeck = (e, card) => {
        const updatedDeckTypeList = deckList[shiftString(card.type)].filter(cards => cards.id !== card.id);
        const updatedDeckList = deckList;
        updatedDeckList[shiftString(card.type)] = updatedDeckTypeList;
        setDeckList(deckList[shiftString(card.type)] === updatedDeckList);
        DECK_API.editDeck(updatedDeckList)
    }


    return (
        <section className='edit-deck'>

            <section className='edit-deck__card-search'>
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

            <section className='edit-deck__deck-list'>

                <h3 className='edit-deck__card-type-heading'>Commander</h3>
                <hr />
                {deckList.commander === [''] ?
                    <section className='edit-deck__card-view'>
                        <p className='edit-deck__card-details-p'>
                            <img src={deckList.commander.imageUrl} style={{ height: '62px', width: '45px', margin: '10px' }} />
                            {deckList.commander.name} - &#40;{deckList.commander.set}&#41; - &#40;{deckList.commander.types}&#41; - {deckList.commander.manaCost}
                            <FaTrashAlt style={{ color: 'red', marginLeft: '25px', cursor: 'pointer' }} onClick={(e) => handleRemoveFromDeck} />
                        </p>
                    </section>
                    : null}



                <h3 className='edit-deck__card-type-heading'>Creatures</h3>
                <hr />
                {deckList.creatures?.map((card) => {
                    return (
                        <section key={card.id} className='edit-deck__card-view'>
                            <p className='edit-deck__card-details-p'>
                                <img src={card.imageUrl} style={{ height: '62px', width: '45px', margin: '10px' }} />
                                {card.name} - &#40;{card.set}&#41; - &#40;{card.types}&#41; - {card.manaCost}
                                <FaTrashAlt style={{ color: 'red', marginLeft: '25px', cursor: 'pointer' }} onClick={(e) => handleRemoveFromDeck(e, card)} />
                            </p>
                        </section>
                    )
                })}

                <h3 className='edit-deck__card-type-heading'>Artifacts</h3>
                <hr />
                {deckList.artifacts?.map((card) => {
                    return (
                        <section key={card.id} className='edit-deck__card-view'>

                            <p className='edit-deck__card-details-p'>
                                <img src={card.imageUrl} style={{ height: '62px', width: '45px', margin: '10px' }} />
                                {card.name} - &#40;{card.set}&#41; - &#40;{card.types}&#41; - {card.manaCost}
                                <FaTrashAlt style={{ color: 'red', marginLeft: '25px', cursor: 'pointer' }} onClick={(e) => handleRemoveFromDeck(e, card)} />
                            </p>

                        </section>
                    )
                })}

                <h3 className='edit-deck__card-type-heading'>Instants</h3>
                <hr />
                {deckList.instants?.map((card) => {
                    return (
                        <section key={card.id} className='edit-deck__card-view'>
                            <p className='edit-deck__card-details-p'>
                                <img src={card.imageUrl} style={{ height: '62px', width: '45px', margin: '10px' }} />
                                {card.name} - &#40;{card.set}&#41; - &#40;{card.types}&#41; - {card.manaCost}
                                <FaTrashAlt style={{ color: 'red', marginLeft: '25px', cursor: 'pointer' }} onClick={(e) => handleRemoveFromDeck(e, card)} />
                            </p>
                        </section>
                    )
                })}

                <h3 className='edit-deck__card-type-heading'>Sorceries</h3>
                <hr />
                {deckList.sorceries?.map((card) => {
                    return (
                        <section key={card.id} className='edit-deck__card-view'>
                            <p className='edit-deck__card-details-p'>
                                <img src={card.imageUrl} style={{ height: '62px', width: '45px', margin: '10px' }} />
                                {card.name} - &#40;{card.set}&#41; - &#40;{card.types}&#41; - {card.manaCost}
                                <FaTrashAlt style={{ color: 'red', marginLeft: '25px', cursor: 'pointer' }} onClick={(e) => handleRemoveFromDeck(e, card)} />
                            </p>
                        </section>
                    )
                })}

                <h3 className='edit-deck__card-type-heading'>Enchantments</h3>
                <hr />
                {deckList.enchantments?.map((card) => {
                    return (
                        <section key={card.id} className='edit-deck__card-view'>
                            <p className='edit-deck__card-details-p'>
                                <img src={card.imageUrl} style={{ height: '62px', width: '45px', margin: '10px' }} />
                                {card.name} - &#40;{card.set}&#41; - &#40;{card.types}&#41; - {card.manaCost}
                                <FaTrashAlt style={{ color: 'red', marginLeft: '25px', cursor: 'pointer' }} onClick={(e) => handleRemoveFromDeck(e, card)} />
                            </p>
                        </section>
                    )
                })}

                <h3 className='edit-deck__card-type-heading'>Lands</h3>
                <hr />
                {deckList.lands?.map((card) => {
                    return (
                        <section key={card.id} className='edit-deck__card-view'>
                            <p className='edit-deck__card-details-p'>
                                <img src={card.imageUrl} style={{ height: '62px', width: '45px', margin: '10px' }} />
                                {card.name} - &#40;{card.set}&#41; - &#40;{card.types}&#41; - {card.manaCost}
                                <FaTrashAlt style={{ color: 'red', marginLeft: '25px', cursor: 'pointer' }} onClick={(e) => handleRemoveFromDeck(e, card)} />
                            </p>
                        </section>
                    )
                })}

            </section>

        </section>
    )
}

export default EditDeck;