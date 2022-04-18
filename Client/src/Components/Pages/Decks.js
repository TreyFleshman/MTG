import React from 'react';
import { NavLink } from 'react-router-dom';

const Decks = () => {

    return (
        <section>
            <NavLink className="nav-link" to="/create-new-deck">
                <button className='btn btn-primary' style={{ float: 'right', marginRight: '15%' }}>Create Deck</button>
            </NavLink>
        </section>
    )
}

export default Decks;