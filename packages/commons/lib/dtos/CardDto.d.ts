import { ECardClass, ECardFaction, ECardMechanics, ECardRarity, ECardSet, ECardType } from "../enums";
declare type CardDto = {
    imageId: string;
    name: string;
    text: string;
    flavor: string;
    artist: string;
    attack: number;
    cardClass: ECardClass | null;
    collectible: boolean;
    cost: number;
    elite: boolean;
    faction: ECardFaction | null;
    health: number;
    mechanics: ECardMechanics[] | null;
    rarity: ECardRarity | null;
    cardSet: ECardSet | null;
    type: ECardType | null;
};
export declare type CreateCardDto = CardDto & Record<string, unknown>;
export declare type GetCardDto = CardDto & {
    id: string;
};
export {};
