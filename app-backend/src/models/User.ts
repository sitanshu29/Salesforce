export interface SalesforceAuth {
    accessToken: string;
    refreshToken: string;
    instanceUrl: string;
  }
  
  export interface User {
    id: string;
    email: string;
    password?: string;
    salesforce?: SalesforceAuth;
  }
  
  export const users: Record<string, User> = {}; 
  