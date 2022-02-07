import { RootState } from "../../app/store";

export interface Deck {
    title: string,
    mainDeck: DeckCardInstance[]
}

export interface DeckCardInstance {
    card: Card,
    number: number
}

export interface Card {
    title: string,
    desc: string,
    atk: number,
    def: number,
    effects: Effect[],
    deckLimit: number
}

export interface Effect {
    type: string,
    text: string,
    condition: (state: RootState) => boolean,
    consequence: unknown //! come back to type
}