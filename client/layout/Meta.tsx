import React from 'react';
import Head from 'next/head';

interface Props {
  siteTitle: string;
  title?: string;
}

const Meta: React.FC<Props> = ({ siteTitle, title }) => (
  <Head>
    <title>{`${title ? `${title} | ` : ''}hearthstone-ts`}</title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="description" content="Learn how to build a personal website using Next.js" />
    <meta
      property="og:image"
      content={`https://og-image.vercel.app/${encodeURI(
        siteTitle,
      )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
    />
    <meta name="og:title" content={siteTitle} />
    <meta name="twitter:card" content="summary_large_image" />

    {/*todo: temporary css:*/}
    <link rel="stylesheet" href="https://unpkg.com/mvp.css" />
  </Head>
);

export default Meta;
