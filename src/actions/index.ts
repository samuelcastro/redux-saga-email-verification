import { EMAIL_FAILURE, EMAIL_REQUEST, EMAIL_SUCCESS } from './types';

export const action = (type: any, payload = {}) => ({type, ...payload})

export const emailAction = {
  failure: (email: any, error: any) => action(EMAIL_FAILURE, {email, error}),
  request: (email: any) => action(EMAIL_REQUEST, {email}),
  success: (email: any, response: any) => action(EMAIL_SUCCESS, {email, response})
}

// export const EMAIL_REQUEST = 'EMAIL_REQUEST'
// export const EMAIL_SUCCESS = 'EMAIL_SUCCESS'
// export const EMAIL_FAILURE = 'EMAIL_FAILURE'
//
//
// export function emailRequest(email: string) {
//   return {
//     type: EMAIL_REQUEST,
//     email,
//   }
// }
//
// export function emailSuccess(email: string, response: any) {
//   return {
//     type: EMAIL_SUCCESS,
//     email,
//     response
//   }
// }
//
// export function emailFailure(email: string, error: any) {
//   return {
//     type: EMAIL_SUCCESS,
//     email,
//     error
//   }
// }
