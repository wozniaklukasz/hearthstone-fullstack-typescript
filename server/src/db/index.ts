import mongoose from 'mongoose';

const DB_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@hearthstone-ts.agb44.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const options = {
    keepAlive: 1,
    connectTimeoutMS: 30000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

/* eslint-disable */

const initDbConnection = () => {
    console.log(`Connecting to db ${process.env.DB_NAME}...`);
    // @ts-ignore
    mongoose.connect(DB_URL, options, (err) => {
        if (err) console.log(err);
        else console.log(`Connected to db ${process.env.DB_NAME}!`);
    });
}

export default initDbConnection;
