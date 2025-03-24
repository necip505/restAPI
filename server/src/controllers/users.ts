import express from 'express';

import {getUsers} from '../db/users';

export const getAllUsers = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const users = await getUsers();
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
}