import * as React from 'react';
import { connect } from 'react-redux';
import { compose, setDisplayName } from 'recompose';
import { validateEmailAction } from '../../../actions';
import {
  domainsSelector,
  emailFormatSelector,
  emailSuggestionSelector,
  emailValidationSelector,
  errorMessagesSelector,
  hasSuggestionSelector,
  smtpSelector
} from '../../../selectors'

interface IPropsFromState {
  isFetching: boolean
  isFormatValid: boolean
  isSmtpCheck: boolean
}

interface IPropsFromParent {
  placeholder: string
  onBlur: (event: React.ChangeEvent<HTMLInputElement>) => object
}

interface IPropsFromDispatch {
  validateEmailHandler: (email: string) => void
}

const mapStateToProps = (state: any) => ({
  domains: domainsSelector(state),
  emailSuggestion: emailSuggestionSelector(state),
  errorMessages: errorMessagesSelector(state),
  hasSuggestion: hasSuggestionSelector(state),
  isEmailValid: emailValidationSelector(state),
  isFetching: state.email.isFetching,
  isFormPristine: state.email.isPristine,
  isFormatValid: emailFormatSelector(state),
  isSmtpCheck: smtpSelector(state)
});

const mapDispatchToProps = (dispatch: any) => ({
  validateEmailHandler: (email: string) => {
    dispatch(validateEmailAction.request(email))
  }
});

const connectWith = connect<IPropsFromState, IPropsFromDispatch, IPropsFromParent>(
  mapStateToProps,
  mapDispatchToProps
);

const withEmailValidator = (Wrapped: any) => {
  const Wrapper = (props: any) => <Wrapped {...props} />;
  return connectWith(Wrapper);
};

export default compose(
  setDisplayName('withEmailValidator'),
  withEmailValidator
);
