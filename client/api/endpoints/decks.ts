import api from '../axios';
import { CreateDeckDto, GetDeckDto } from 'dto';

const getDecks = (): Promise<GetDeckDto[]> => api.get('decks');
const getDeck = (id: string): Promise<GetDeckDto> => api.get(`decks/${id}`);
const createDeck = (deck: CreateDeckDto): Promise<GetDeckDto> => api.post(`decks`, deck);
const updateDeck = (deck: GetDeckDto): Promise<GetDeckDto> => api.put(`decks/${deck.id}`, deck);
const deleteDeck = (id: string): Promise<string> => api.delete(`decks/${id}`);

export { getDecks, getDeck, createDeck, updateDeck, deleteDeck };
