export type Card = {
    word: string;
    description: string;
    parameters: Parameters;
    observation: string;
    videoLinks: string[];
    stats: any;
}

export type Parameters = {
    configMainDominante: string;
    configMainDominee: string;
    emplacement: string;
    orientationPaumeMainDominante: string;
    orientationPaumeMainDominee: string;
    mouvement: string;
    expressionFaciale: string;
}

export type TypeOfCard = 'guess_fr_to_lsf' | 'guess_lsf_to_fr' | 'new_card' | 'cards_list';