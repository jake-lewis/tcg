import { Deck } from "./deck";
import { TestCard } from "./resources/cards/TestCard";

export const testState: Deck = {
    title: 'Test Deck',
    mainDeck: [
        {
            card : TestCard,
            number: 2
        }
    ]
}

export default testState;