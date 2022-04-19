import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { DECK_API } from "../../Services/decks.connectToDB";
import CardBack from '../../Assets/Images/mtg-card-back.jpg';

import 'bootstrap/dist/css/bootstrap.min.css';

const DeckCard = (props) => {

    const { title, id } = props;

    const editDeckURL = `/edit-deck/:${id}`;

    const handleOnDeleteDeck = (e, id) => {
        console.log(id);
        DECK_API.deleteDeck(id);
        window.location.reload();
    }

    return (
        <section>

            <div className="card decks__deck-card" style={{ width: '18rem' }}>
                <div className="card-header">
                    <h5 className="card-title">{title} <FaTrashAlt className="deck-card__trash-i" onClick={(e)=>handleOnDeleteDeck(e, id)}/></h5>
                </div>
                <div className="card-body">
                    <img src={CardBack} className="card-img-top" alt="..." style={{ height: '16rem', width: '12rem' }} />
                </div>
                <div className="card-footer">
                    <a href={editDeckURL} className="btn btn-primary" >Edit Deck</a>
                </div>
            </div>

        </section>
    )
}

export default DeckCard;