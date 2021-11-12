import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '../../layout/Layout';
import { GetCardDto } from '../../dto';
import { getCard, getCards } from '../../api/endpoints/cards';

interface Props {
  card: GetCardDto;
}

const Cards: React.FC<Props> = ({ card }) => {
  return (
    <Layout title={card.name}>
      <img alt={card.name} src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${card.imageId}.png`} />
    </Layout>
  );
};

export default Cards;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: cards } = await getCards();
  const paths = cards.map((card) => ({ params: { id: card.id } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: card } = await getCard(params.id as string);

  return {
    props: {
      card,
    },
  };
};
