import Mailcheck from 'mailcheck';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { validateEmailAction } from '../actions';
import { EMAIL_REQUEST } from '../actions/types';
import { validateEmailService } from '../services';

// Just a new few domains that maincheck doesn't have
const DEFAULT_DOMAINS = [
  'aol.com', 'att.net', 'comcast.net', 'facebook.com', 'gmail.com', 'gmail.co.uk',
  'gmx.com', 'googlemail.com', 'google.com', 'hotmail.com', 'hotmail.co.uk', 'mac.com',
  'live.com', 'sbcglobal.net', 'verizon.net', 'yahoo.com', 'yahoo.co.uk', 'invoicesimple.com',
  'me.com', 'mail.com', 'msn.com',
];

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

const defaultDomains = function* () {
  const domains = Mailcheck.defaultDomains.concat(DEFAULT_DOMAINS);

  Mailcheck.defaultDomains = domains;

  yield put(validateEmailAction.domains(Mailcheck.defaultDomains))
}

const verifyEmail = function* (email: string) {
  try {
    const {json} = yield call(validateEmailService, email);

    yield put(validateEmailAction.success(email, json));

  } catch (error) {
    yield put(validateEmailAction.failure(email, error));
  }
}

const validateEmail = function* (action: any) {
  yield all([
    fork(validateEmailTypo, action.email),
    fork(verifyEmail, action.email)
  ])
};

const watchEmailInputChange = function* () {
  yield takeLatest(EMAIL_REQUEST, validateEmail)
};


export default function* root() {
  yield all([
    fork(watchEmailInputChange),
    fork(defaultDomains)
  ])
}
