import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DeckCard from '../Other/DeckCard';
import { DECK_API } from '../../Services/decks.connectToDB';
import { DeckData } from '../../Models/deck.model';

import '../../Styles/decks.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Decks = () => {

    const [res, setRes] = useState();
    const [deckTitle, setDeckTitle] = useState('');
    const [userDecks, setUserDecks] = useState();

    const filterRes = (deck) => {
        let user = sessionStorage.getItem("user");
        user = JSON.parse(user);
        return deck.user.userName === user.userName;
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/decks`)
            .then((res) => { setUserDecks(res.data?.filter(filterRes)) })
    }, []);

    const handleOnTitleChange = (e) => {
        setDeckTitle(e.target.value);
    }

    const handleCreateNewDeck = async () => {
        let user = sessionStorage.getItem("user");
        user = JSON.parse(user);
        const currUser = { _id: user._id, userName: user.userName }
        const newDeckData = new DeckData(currUser, deckTitle);
        const resNewDeck = await DECK_API.addDeck(newDeckData);
        window.location.href = `/edit-deck/:${resNewDeck.insertedId}`;
    }

    return (
        <section className='decks'>
            <section>
                <button type="button" style={{ float: 'right', marginRight: '15%' }} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Create New Deck
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Enter the Title for your Deck</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <label htmlFor="deck-title" className="col-form-label">Deck Title:</label>
                                <input type="text" className="form-control" id="deck-title" onChange={handleOnTitleChange} value={deckTitle} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleCreateNewDeck}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='decks__user-decks-section'>
                {userDecks?.map((deck) => {
                    return (
                        <DeckCard
                            key={deck._id}
                            id={deck._id}
                            title={deck.title}
                        />
                    )
                })}

            </section>

        </section>
    )
}

export default Decks;