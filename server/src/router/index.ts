import express from 'express';
import authentication from './authentication';

export default (): express.Router => {
    const router = express.Router();
    
    router.use('/api', authentication);
    
    return router;
};