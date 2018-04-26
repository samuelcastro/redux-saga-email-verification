import {
  append, complement, compose, equals, isNil,
  path, prop, propOr, reject
} from 'ramda';

import { createSelector } from 'reselect';

const smtpCheck = compose(equals('true'), prop('smtpCheck'));
const formatCheck = compose(equals('true'), prop('formatCheck'));

const email = prop('email');
const validation = compose(prop('validation'), email);
const suggestion = path(['email', 'suggestion']);
const errorMessage = propOr([], 'ErrorMessage');
const apiError = prop('apiError');

// Memoization to avoid recomputation based on reselect
// This will pottentially bring amazing performance improvements long term - Samuel

export const hasSuggestionSelector = createSelector(
  suggestion,
  complement(isNil)
)

export const emailSuggestionSelector = createSelector(
  suggestion,
  prop('full')
)

export const domainsSelector = createSelector(
  email,
  propOr([], 'domains')
);

export const emailFormatSelector = createSelector(
  validation,
  formatCheck
);

export const smtpSelector = createSelector(
  validation,
  smtpCheck
)

export const errorMessagesSelector = createSelector(
  compose(apiError, email),
  compose(errorMessage, validation),
  compose(reject(isNil), append)
)

export const emailValidationSelector = createSelector(
  emailFormatSelector,
  smtpSelector,
  (isFormatValid: boolean, isSmtpValid: boolean) => {
    return isFormatValid && isSmtpValid
  }
)
