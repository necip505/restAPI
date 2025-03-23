import crypto from 'crypto';

const SECRET = 'nwayce-rest-api';

export const random =()=>crypto.randomBytes(128).toString('base64');