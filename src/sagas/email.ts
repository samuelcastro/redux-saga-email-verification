import Mailcheck from 'mailcheck';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { validateEmailAction } from '../actions';
import { EMAIL_REQUEST } from '../actions/types';
import { validateEmailService } from '../services';

// NOTE: I'm using redux-sagas here. Generators are so powerful

// Just a new few domains that maincheck doesn't have ;) - Samuel
const DEFAULT_DOMAINS = [
  'aol.com', 'att.net', 'comcast.net', 'facebook.com', 'gmail.com', 'gmail.co.uk',
  'gmx.com', 'googlemail.com', 'google.com', 'hotmail.com', 'hotmail.co.uk', 'mac.com',
  'live.com', 'sbcglobal.net', 'verizon.net', 'yahoo.com', 'yahoo.co.uk', 'invoicesimple.com',
  'me.com', 'mail.com', 'msn.com',
];

// Validating some typo and adding a suggestion.
const validateEmailTypo = function* (email: string) {
  yield call(Mailcheck.run, {
    email,
    *empty() {
      yield put(validateEmailAction.suggestion(null));
    },
    *suggested(suggestion: any) {
      yield put(validateEmailAction.suggestion(suggestion));
    }
  })
}

// Getting default mailcheck domains and adding a few more.
const defaultDomains = function* () {
  const domains = Mailcheck.defaultDomains.concat(DEFAULT_DOMAINS);

  Mailcheck.defaultDomains = domains;

  yield put(validateEmailAction.domains(Mailcheck.defaultDomains))
}

// Verifying email based on https://emailverification.whoisxmlapi
const verifyEmail = function* (email: string) {
  try {
    const {json} = yield call(validateEmailService, email);

    yield put(validateEmailAction.success(email, json));

  } catch (error) {
    yield put(validateEmailAction.failure(email, error));
  }
}

// Emiting a parallel fork effect to whne some REQUEST action arrive
const validateEmail = function* (action: any) {
  yield all([
    fork(validateEmailTypo, action.email),
    fork(verifyEmail, action.email)
  ])
};

// Listening for REQUEST actions and calling validateEmail
const watchEmailInputChange = function* () {
  yield takeLatest(EMAIL_REQUEST, validateEmail)
};


export default function* root() {
  yield all([
    fork(watchEmailInputChange),
    fork(defaultDomains)
  ])
}
