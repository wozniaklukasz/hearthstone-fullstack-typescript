import cors from 'cors';

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
};

export default () => cors(corsOptions);
