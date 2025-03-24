import express from 'express';
import { get, merge } from 'lodash';
import { getUserBySessionToken } from '../db/users';

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction): Promise<void> => {
    try {
        const sessionToken = req.cookies['NWAYCE-AUTH'];
        if (!sessionToken) {
            res.sendStatus(403);
            return;
        }
        const existingUser = await getUserBySessionToken(sessionToken);
        if (!existingUser) {
            res.sendStatus(403);
            return;
        }
        merge(req, { identity: existingUser });
        next();
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
};