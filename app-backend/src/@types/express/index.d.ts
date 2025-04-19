import { User } from '../../models/User';

declare global {
  namespace Express {
    interface Request {
      user?: User; // 👈 user is optional, and follows your User model
    }
  }
}
