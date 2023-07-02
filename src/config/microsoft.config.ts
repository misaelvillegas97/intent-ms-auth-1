import { StrategyOptions } from 'passport-microsoft';

export const microsoftConfig: StrategyOptions = {
  clientID: process.env.MICROSOFT_CLIENT_ID,
  clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
  callbackURL: process.env.MICROSOFT_CALLBACK_URL,
  scope: ['user:email'],
};