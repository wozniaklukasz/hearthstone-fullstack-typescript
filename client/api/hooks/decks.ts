import { UseMutationResult, useMutation, UseQueryResult, useQuery, UseQueryOptions } from 'react-query';
import { CreateDeckDto, GetDeckDto } from 'dto';
import { Error } from '../types';
import { createDeck, deleteDeck, getDeck, getDecks, updateDeck } from '../endpoints';

const useGetDecks = (): UseQueryResult<{ data: GetDeckDto[] }, Error> => useQuery('getDecks', () => getDecks());
const useGetDeck = (id: string): UseQueryResult<{ data: GetDeckDto[] }, Error> =>
  useQuery(['getDeck', id], () => getDeck(id));
const useCreateDeck = (
  options?: UseQueryOptions<{ data: GetDeckDto }, Error>,
): UseMutationResult<{ data: GetDeckDto }, Error, CreateDeckDto> => useMutation((deck) => createDeck(deck), options);
const useUpdateDeck = (
  options?: UseQueryOptions<{ data: GetDeckDto }, Error>,
): UseMutationResult<{ data: GetDeckDto }, Error, GetDeckDto> => useMutation((deck) => updateDeck(deck), options);
const useDeleteDeck = (
  options?: UseQueryOptions<{ data: string }, Error>,
): UseMutationResult<{ data: string }, Error, string> => useMutation((id) => deleteDeck(id), options);

export { useGetDecks, useGetDeck, useCreateDeck, useUpdateDeck, useDeleteDeck };
