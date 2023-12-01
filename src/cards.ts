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

export function loadCards(): void {
    const elem = window.localStorage.getItem(LS_CARDS);
    if (elem) {
        cards = JSON.parse(elem);
    }
}

export function addCard(card: Card): void {
    const elem = window.localStorage.getItem(LS_CARDS);
    if (elem) {
        cards = JSON.parse(elem);
        cards.push(card);
        window.localStorage.setItem(LS_CARDS, JSON.stringify(cards));
    } else {
        window.localStorage.setItem(LS_CARDS, JSON.stringify([card]));
    }
    loadCards();
}