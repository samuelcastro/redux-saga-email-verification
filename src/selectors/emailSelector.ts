import { complement, compose, equals, isNil, path, prop, propOr } from 'ramda';
import { createSelector } from 'reselect';

const smtpCheck = compose(equals('true'), prop('smtpCheck'));
const formatCheck = compose(equals('true'), prop('formatCheck'));

const email = prop('email');
const validation = prop('validation');
const suggestion = path(['email', 'suggestion']);

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
  compose(validation, email),
  formatCheck
);

export const smtpSelector = createSelector(
  compose(validation, email),
  smtpCheck
)

export const errorMessagesSelector = createSelector(
  compose(validation, email),
  propOr([], 'ErrorMessage')
)

export const emailValidationSelector = createSelector(
  emailFormatSelector,
  smtpSelector,
  (isFormatValid: boolean, isSmtpValid: boolean) => {
    return isFormatValid && isSmtpValid
  }
)
