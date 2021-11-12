import React from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Layout from 'layout';
import { GetCardDto } from 'dto';
import { getCard, getCards } from 'api/endpoints/cards';

interface Props {
  card: GetCardDto;
}

const Card: React.FC<Props> = ({ card }) => {
  return (
    <Layout title={card.name}>
      <img alt={card.name} src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${card.imageId}.png`} />
    </Layout>
  );
};

export default Card;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: cards } = await getCards();
  const paths = cards.map((card) => ({ params: { id: card.id } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;
  const { data: card } = await getCard(params.id as string);

  return {
    props: {
      card,
    },
  };
};
