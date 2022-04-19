import axios from 'axios';

export const DECK_API = (() => {

    const baseURL = "http://localhost:5000";

    const url = "http://localhost:5000/decks";

    const addDeck = async (deck) => {
        let response =  await axios.post([url, 'add'].join("/"), deck)
        return response.data;
    }

    const findAllDecks = async () => {
        let response = await axios.get(url);
        return response.data;
    }

    const findDeck = async (id) => {
        let response = await axios.get([url, id].join("/"));
        return response.data;
    }

    const editDeck = async (deck) => {
        await axios.post([baseURL, 'updateDeck', deck._id].join("/"), deck);
    }

    const deleteDeck = async (id) => {
        await axios.delete([baseURL, 'deleteDeck', id].join("/"));
    }

    return { addDeck, findDeck, findAllDecks, editDeck, deleteDeck }
})();