import React from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { GetDeckDto } from 'commons/lib/dtos';
import Layout from 'layout';
import { deleteDeck, getDeck, updateDeck } from 'api';

interface Props {
  deck: GetDeckDto;
}

const Deck: React.FC<Props> = ({ deck }) => {
  return (
    <Layout title={deck.title}>
      {deck.title}
      <button
        onClick={() =>
          updateDeck({
            ...deck,
            title: `rand title ${Math.random()}`,
          })
        }
      >
        Update
      </button>
      <button onClick={() => deleteDeck(deck.id)}>Delete</button>
    </Layout>
  );
};

export default Deck;

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { params } = context;
  const { data: deck } = await getDeck(params.id as string);

  return {
    props: { deck },
  };
};
