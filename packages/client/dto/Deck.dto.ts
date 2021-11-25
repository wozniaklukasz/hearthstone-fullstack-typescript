type DeckDto = {
  title: string;
};

export type CreateDeckDto = DeckDto & Record<string, unknown>;

export type GetDeckDto = DeckDto & {
  id: string;
  createdAt: string;
  updatedAt: string;
};
