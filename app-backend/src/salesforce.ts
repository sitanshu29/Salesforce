import { Connection, OAuth2 } from 'jsforce';
import dotenv from 'dotenv';
import { users } from './models/User';

dotenv.config();


const oauth2 = new OAuth2({
  loginUrl: process.env.SALESFORCE_LOGIN_URL || 'https://login.salesforce.com',
  clientId: process.env.SALESFORCE_CLIENT_ID!,
  clientSecret: process.env.SALESFORCE_CLIENT_SECRET!,
  redirectUri: process.env.SALESFORCE_REDIRECT_URI!,
});



export const getAuthorizationUrl = async (userId: string) => {

  const authorizationUrl = oauth2.getAuthorizationUrl({
    scope: 'full refresh_token api',
  });

  return `${authorizationUrl}&state=${userId}`;
};

export const handleOAuthCallback = async (code: string, state: string): Promise<Connection> => {

  const conn = new Connection({ oauth2 });

  const user = users[state];
  if (!user) throw new Error('User not found');

  const result = await conn.authorize(code); 
  user.salesforce = {
    accessToken: conn.accessToken || "",
    refreshToken: conn.refreshToken!,
    instanceUrl: conn.instanceUrl,
  };

return conn;
};

export const fetchAccounts = async (userId: string, offset: number, pageSize: number) => {
  const user = users[userId];
  if (!user?.salesforce) throw new Error('Salesforce not connected');;

  const conn = new Connection({
    instanceUrl: user.salesforce.instanceUrl,
    accessToken: user.salesforce.accessToken,
  });

  const accounts = await conn.sobject('Account').find({}, ['Id', 'Name', 'Industry', 'Phone'])
    .skip(offset)
    .limit(pageSize);
  return accounts;
};