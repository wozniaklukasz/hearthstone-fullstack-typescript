declare type DeckDto = {
    title: string;
};
export declare type CreateDeckDto = DeckDto & Record<string, unknown>;
export declare type GetDeckDto = DeckDto & {
    id: string;
    createdAt: string;
    updatedAt: string;
};
export {};
