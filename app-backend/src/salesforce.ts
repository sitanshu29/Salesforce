import { Connection, OAuth2 } from 'jsforce';
import dotenv from 'dotenv';
import crypto from 'crypto';
import { users } from './models/User';

dotenv.config();

// Generate a random code verifier
// const generateCodeVerifier = (): string => {
//   const buffer = crypto.randomBytes(56);  // Length of 56 bytes
//   return buffer.toString('base64url');  // Convert to base64url encoding (standard for PKCE)
// };

// // Generate the code challenge from the code verifier (SHA-256 hash)
// const generateCodeChallenge = (codeVerifier: string): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     const hash = crypto.createHash('sha256');
//     hash.update(codeVerifier);
//     const codeChallenge = hash.digest('base64url'); // Base64url encoding
//     resolve(codeChallenge);
//   });
// };

const oauth2 = new OAuth2({
  loginUrl: process.env.SALESFORCE_LOGIN_URL || 'https://login.salesforce.com',
  clientId: process.env.SALESFORCE_CLIENT_ID!,
  clientSecret: process.env.SALESFORCE_CLIENT_SECRET!,
  redirectUri: process.env.SALESFORCE_REDIRECT_URI!,
});

// let conn: Connection;

//const codeVerifierStore: { [key: string]: string } = {};



// Step 1: Generate OAuth2 Authorization URL
export const getAuthorizationUrl = async (userId: string) => {
  // const codeVerifier = generateCodeVerifier();  // Step 1: Generate code verifier
  // const codeChallenge = await generateCodeChallenge(codeVerifier); // Await the promise
  //const uniqueKey = new Date().getTime().toString(); // Use a unique key to store verifier
  //codeVerifierStore[uniqueKey] = codeVerifier;

  const authorizationUrl = oauth2.getAuthorizationUrl({
    scope: 'full refresh_token api',
    // response_type: 'code',
    // code_challenge: codeChallenge,
    // code_challenge_method: 'S256',  // PKCE method
  });

  // Return the authorization URL
  return `${authorizationUrl}&state=${userId}`;
};

// Step 2: Handle Callback and Create Connection
export const handleOAuthCallback = async (code: string, state: string): Promise<Connection> => {
  // const codeVerifier = codeVerifierStore[state];;
  // if (!codeVerifier) {
  //   throw new Error('Code verifier is missing.');
  // }
  const conn = new Connection({ oauth2 });

  const user = users[state];
  if (!user) throw new Error('User not found');

  //const result = await conn.authorize(code, { code_verifier: codeVerifier }); // Exchange code for access token
  const result = await conn.authorize(code); // Exchange code for access token

  user.salesforce = {
    accessToken: conn.accessToken || "",
    refreshToken: conn.refreshToken!,
    instanceUrl: conn.instanceUrl,
  };

// delete codeVerifierStore[state];
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