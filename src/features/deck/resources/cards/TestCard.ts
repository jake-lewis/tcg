import { Card } from "../../deck";

export const TestCard: Card = {
    title: 'Test Card',
    desc: 'Elusive card using for testing the very rules of reality.',
    atk: 9999,
    def: 1337,
    deckLimit: 3,
    effects: [
        {
            type: 'norm_summon',
            text: 'Swaps ATK & DEF if deck title is not \'Test Deck\'',
            condition: (state) => state.deck.title !== 'Test Deck',
            consequence: null
        }
    ]
}