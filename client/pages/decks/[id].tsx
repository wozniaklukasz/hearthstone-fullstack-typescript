import React from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Layout from '../../layout/Layout';
import { GetDeckDto } from '../../dto';
import { getDeck } from '../../api/endpoints/decks';

interface Props {
  deck: GetDeckDto;
}

const Deck: React.FC<Props> = ({ deck }) => {
  return <Layout title={deck.title}>{deck.title}</Layout>;
};

export default Deck;

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { params } = context;
  const { data: deck } = await getDeck(params.id as string);

  return {
    props: { deck }, // will be passed to the page component as props
  };
};
