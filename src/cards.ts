import { Card } from "./types";

const LS_CARDS: string = 'cards';

export let cards: Card[];

export function newEmptyCard(): Card {
    return {
        word: '',
        description: '',
        parameters: {
            configMainDominante: '',
            configMainDominee: '',
            emplacement: '',
            orientationPaumeMainDominante: '',
            orientationPaumeMainDominee: '',
            mouvement: '',
            expressionFaciale: ''
        },
        observation: '',
        videoLinks: [],
        stats: []
    };
}

// Load cards
export function loadCards(): void {
    const elem = window.localStorage.getItem(LS_CARDS);
    if (elem) {
        cards = JSON.parse(elem);
    }
}

// Add a card in localStorage
export function addCard(card: Card): void {
    const elem = window.localStorage.getItem(LS_CARDS);
    if (elem) {
        cards = JSON.parse(elem) as Card[];
        const index = cards.findIndex((c: Card) => c.word.toLowerCase().trim() === card.word.toLowerCase().trim());
        if (index < 0) {
            cards.push(card);
            window.localStorage.setItem(LS_CARDS, JSON.stringify(cards));
        }
    } else {
        cards.push(card);
        window.localStorage.setItem(LS_CARDS, JSON.stringify([card]));
    }
    loadCards();
}

// Edit a card in localStorage
export function editWord(editedCard: Card): void {
    const elem = window.localStorage.getItem(LS_CARDS);
    if (elem) {
        cards = JSON.parse(elem) as Card[];
        const index = cards.findIndex((c: Card) => c.word.toLowerCase().trim() === editedCard.word.toLowerCase().trim());
        if (index >= 0) {
            cards[index] = editedCard;
            window.localStorage.setItem(LS_CARDS, JSON.stringify(cards));
        } else {
            cards.push(editedCard);
        }
    } else {
        cards.push(editedCard);
        window.localStorage.setItem(LS_CARDS, JSON.stringify([editedCard]));
    }
    loadCards();
}