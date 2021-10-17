interface DeckDto {
    title: string;
}

export type CreateDeckDto = DeckDto & {}

export type GetDeckDto = DeckDto & {
    id: string;
    createdAt: string;
    updatedAt: string;
}
