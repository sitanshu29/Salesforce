import { Request, Response, NextFunction } from 'express';
import jwt, {JwtPayload} from 'jsonwebtoken';
import dotenv from 'dotenv';
import { users } from '../models/User';

dotenv.config();

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  let token ="";
  const authHeader = req.headers.authorization;
  
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1];
  } else if (req.query.token) {
    token = req.query.token as string;
  }

  if (!token) {
    res.status(401).json({ message: 'Unauthorized: No token provided' });
    return;
  }


  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!)  as JwtPayload;
    const user = users[decoded.userId];
    
    if (!user) {

     res.status(401).json({ message: 'Invalid user' });
     return;
    }
    
    req.user = { id: user.id, email: user.email };
    next();
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized: Invalid token' });
    return;
  }
};
