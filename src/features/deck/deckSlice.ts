import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card, Deck } from "./deck";

const initialState: Deck = {
    title: 'New Deck',
    mainDeck: []
}

export const deckSlice = createSlice({
    name: 'deck',
    initialState,
    reducers: {
        setTitle: (state, action: PayloadAction<string>) => { state.title = action.payload },
        addCard: (state, action: PayloadAction<Card>) => {
            const instance = state.mainDeck.find(inst => inst.card.title === action.payload.title);
            if (instance === undefined) {
                state.mainDeck.push({card: action.payload, number: 1})
            } else if (instance.number < instance.card.deckLimit) {
                instance.number++;
            } else {
                console.warn(`Can only have a max of ${instance.card.deckLimit} ` +
                    `${instance.card.deckLimit === 1 ? 'copy' : 'copies'} of '${instance.card.title}' at a time.`)
            }
        },
        removeCard: (state, action: PayloadAction<string>) => {
            const instance = state.mainDeck.find(inst => inst.card.title === action.payload);
            if (instance === undefined) {
                console.warn(`Cannot remove card '${action.payload}' since there are none in the deck.`)
            }
            else if (instance.number > 1) {
                instance.number--;
            } else {
                state.mainDeck = state.mainDeck.filter(inst => inst.card.title !== action.payload);
            }
        }
    }
});

export const { setTitle, addCard, removeCard } = deckSlice.actions;

export default deckSlice.reducer;
