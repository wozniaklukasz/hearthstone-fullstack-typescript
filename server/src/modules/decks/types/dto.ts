interface DeckDto {
  title: string;
}

export type CreateDeckDto = DeckDto & Record<string, never>;

export type GetDeckDto = DeckDto & {
  id: string;
  createdAt: string;
  updatedAt: string;
};
