import { Deck } from "./deck";
import deckReducer, { addCard } from "./deckSlice";
import { Critter } from "./resources/cards/Critter";
import TestState from './deckSlice.spec.state';


describe('Deck manager operations', () => {
    test('Add new card', () => {
        expect(deckReducer(TestState, addCard(Critter))).toEqual({
            ...TestState,
            mainDeck: [...TestState.mainDeck, {card: Critter, number: 1}]
        })
    });

    test('Add duplicate card', () => {
        const initialState: Deck = {...TestState, mainDeck: [...TestState.mainDeck, {card: Critter, number: 2}]};
        expect(deckReducer(initialState, addCard(Critter))).toEqual({
            ...initialState,
            mainDeck: [...TestState.mainDeck, {card: Critter, number: 3}]
        })
    });

    test('Add card over deck limit fails', () => {
        const initialState: Deck = {...TestState, mainDeck: [...TestState.mainDeck, {card: Critter, number: 3}]};
        expect(deckReducer(initialState, addCard(Critter))).toEqual({
            ...initialState,
            mainDeck: [...TestState.mainDeck, {card: Critter, number: 3}]
        })
    });
})