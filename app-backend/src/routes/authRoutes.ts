import express from 'express';
import { registerUser, loginUser } from '../controllers/authController';
import { getAuthorizationUrl, handleOAuthCallback, fetchAccounts } from '../salesforce';
import { authMiddleware } from '../middleware/authmiddleware';


const router = express.Router();

router.post('/register', registerUser);
router.post('/login', (req, res, next) => {
    loginUser(req, res).catch(next);
});

router.get('/oauth/login',authMiddleware, async (req, res) => {
    try {
        const userId = req.user!.id as string;
        const authUrl = await getAuthorizationUrl(userId);
        res.redirect(authUrl);
    } catch (error) {
        console.error('Error generating authorization URL:', error);
        res.status(500).send('Failed to generate authorization URL');
    }
});


router.get('/salesforce/callback', async (req, res) => {
    try {
      const code = req.query.code as string;
      const state = req.query.state as string;
      await handleOAuthCallback(code, state);
      const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:4200'; 
      res.redirect(`${frontendUrl}/dashboard`);
    } catch (error) {
      console.error('OAuth callback error:', error);
      res.status(500).send('Authentication failed');
    }
  });

// Fetch Salesforce accounts
router.get('/salesforce/accounts', authMiddleware, async (req, res) => {
    try {
        const page = parseInt(req?.query?.page as string || '1'); // default page 1
        const pageSize = parseInt(req.query.pageSize as string || '5'); // default 5 records per page
        const offset = (page - 1) * pageSize;
        console.log(req.user);
        const userId = req.user!.id as string;
        const accounts = await fetchAccounts(userId,offset, pageSize);
        res.json(accounts);
    } catch (error) {
        console.error('Error fetching accounts:', error);
        res.status(500).json({ message: 'Failed to fetch accounts' });
    }
});

export default router;
