import {
  EMAIL_DOMAINS,
  EMAIL_FAILURE,
  EMAIL_REQUEST,
  EMAIL_SUCCESS,
  EMAIL_SUGGESTION
} from './types';

export interface IAction {
  type: string;
  response?: any;
  suggestion?: any;
  error: any;
  domains: any[]
}

export const action = (type: string, payload = {}) => ({type, ...payload})

export const validateEmailAction = {
  domains: (domains: any[]) => action(EMAIL_DOMAINS, {domains}),
  failure: (email: string, error: any) => action(EMAIL_FAILURE, {email, error}),
  request: (email: string) => action(EMAIL_REQUEST, {email}),
  success: (email: string, response: any) => action(EMAIL_SUCCESS, {email, response}),
  suggestion: (suggestion: any) => action(EMAIL_SUGGESTION, {suggestion})
}
