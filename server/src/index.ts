import dotenv from 'dotenv';
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config();

const app = express();

app.use(cors({
    credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

const MONGO_URL = process.env.DATABASE_URL;


server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});

mongoose.Promise = Promise;

mongoose.connect(MONGO_URL)
    
mongoose.connection.on('error', (error: Error) => console.log(error));