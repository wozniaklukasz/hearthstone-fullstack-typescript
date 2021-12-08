import { Application } from 'express';
import session, { SessionOptions } from 'express-session';

const sessionOptions: SessionOptions = {
  // todo: env
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {},
};

export default (app: Application) => {
  if (app.get('env') === 'production') {
    app.set('trust proxy', 1); // trust first proxy
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    sessionOptions.cookie.secure = true; // serve secure cookies
  }

  app.use(session(sessionOptions));
};
