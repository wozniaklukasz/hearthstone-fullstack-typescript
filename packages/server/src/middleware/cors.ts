import cors from 'cors';

const corsOptions = {
  origin: process.env.CLIENT_URL,
};

export default () => cors(corsOptions);
