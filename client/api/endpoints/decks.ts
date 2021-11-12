import api from '../axios';
import { CreateDeckDto, GetDeckDto } from '../../dto';

const getDecks = (): Promise<{ data: GetDeckDto[] }> => api.get('decks');
const getDeck = (id: string): Promise<{ data: GetDeckDto }> => api.get(`decks/${id}`);
const createDeck = (deck: CreateDeckDto): Promise<{ data: GetDeckDto }> => api.post(`decks`, deck);
const updateDeck = (deck: GetDeckDto): Promise<{ data: GetDeckDto }> => api.put(`decks/${deck.id}`, deck);
const deleteDeck = (id: string): Promise<{ data: string }> => api.delete(`decks/${id}`);

export { getDecks, getDeck, createDeck, updateDeck, deleteDeck };
