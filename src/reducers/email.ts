import { IAction } from '../actions';

import {
  EMAIL_DOMAINS,
  EMAIL_FAILURE,
  EMAIL_REQUEST,
  EMAIL_SUCCESS,
  EMAIL_SUGGESTION
} from '../actions/types'

export interface IState {
  readonly errorMessages: any[];
  readonly isFetching: boolean | null;
  readonly isPristine: boolean | null;
  readonly suggestion: any;
};

const defaultState: IState = {
  errorMessages: [],
  isFetching: false,
  isPristine: true,
  suggestion: null,
}

const email = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case EMAIL_REQUEST:
      return {
        ...state,
        isFetching: true,
        isPristine: false
       }

    case EMAIL_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isPristine: false,
        validation: action.response
      }

    case EMAIL_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
        isPristine: false
      }

    case EMAIL_SUGGESTION:
      return {
        ...state,
        isPristine: false,
        suggestion: action.suggestion
      }

    case EMAIL_DOMAINS:
      return {
        ...state,
        domains: action.domains
      }

    default:
      return state
  }
}

export default email;
