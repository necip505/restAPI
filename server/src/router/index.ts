import express from 'express';
import authentication from './authentication';
import users from './users';

const router = express.Router();

export default (): express.Router => {
    router.use('/api', authentication);
    router.use('/api', users);
    return router;
};