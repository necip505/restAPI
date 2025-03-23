import express from 'express';
import {getUserByEmail,createUser} from '../db/users';
import {random,authentication} from '../helpers';
export const register = async (req: express.Request, res: express.Response) => {


    try {
        const{email,password,userName} = req.body;
    
        if(!email || !password || !userName){
            return res.sendStatus(400);
        }

    const existingUser = await getUserByEmail(email);
    
    if(existingUser){
        return res.sendStatus(400);
    }


const salt = random();
const user= await createUser({
    email,
    userName,
    authentication:{
        salt,
        password: authentication(salt,password),
    },
});

return res.status(200).json(user).end();
}catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}