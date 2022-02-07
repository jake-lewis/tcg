import { Deck } from "./deck";
import deckReducer, { addCard, removeCard, setTitle } from "./deckSlice";
import { Critter } from "./resources/cards/Critter";
import TestState from './deckSlice.spec.state';


describe('Deck manager operations', () => {

    test('Set deck title', () => {
        expect(deckReducer(TestState, setTitle('New Title'))).toEqual({
            ...TestState,
            title: 'New Title'
        })
    });

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

    test('Remove card', () => {
        const initialState: Deck = {...TestState, mainDeck: [...TestState.mainDeck, {card: Critter, number: 1}]};
        expect(deckReducer(initialState, removeCard(Critter.title))).toEqual({
            ...initialState,
            mainDeck: TestState.mainDeck
        })
    });

    test('Remove duplicate card', () => {
        const initialState: Deck = {...TestState, mainDeck: [...TestState.mainDeck, {card: Critter, number: 2}]};
        expect(deckReducer(initialState, removeCard(Critter.title))).toEqual({
            ...initialState,
            mainDeck: [...TestState.mainDeck, {card: Critter, number: 1}]
        })
    });

    test('Remove non-existent card', () => { //! TODO add error returns and check for this
        expect(deckReducer(TestState, removeCard(Critter.title))).toEqual(TestState);
    });
})