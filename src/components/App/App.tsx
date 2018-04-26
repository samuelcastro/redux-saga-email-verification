import { map } from 'ramda';
import * as React from 'react';
import { compose } from 'recompose';
import { Form } from '../';
import image from '../../assets/invoicesimples.png';
import { EmailInput, EmailOptionSuggestion, ErrorMessage } from '../../components';
import { withEmailValidator, withErrorBoundary } from '../../containers/hoc'
import { withMap } from '../hoc'
import './App.css';

import {
  changeEmail,
  setSuggestedEmail,
  validateEmail,
  validateEmailKeyPress
} from './AppHelper';

export interface IStatefulAppProps {
  emailSuggestion: string;
  isFormPristine: boolean;
  isEmailValid: boolean;
  isFetching: boolean;
  isSmtpCheck: boolean;
  value: string;
  domains: any;
}

export interface IAppState {
  email: string;
  emailSuggestion: string;
  errorMessages: any
};

class App extends React.Component<IStatefulAppProps, IAppState> {
  public state = {
    email: '',
    emailSuggestion: this.props.emailSuggestion,
    errorMessages: []
  };

  public componentWillReceiveProps(props: any) {
    this.setState({
      emailSuggestion: props.emailSuggestion,
      errorMessages: props.errorMessages
    });
  };

  public render() {
    const errorMessages = map((error: any) => (
        <ErrorMessage message={error.Error} key={error.Error} />
    ), this.state.errorMessages)

    return (
      <div className='App'>
        <Form image={image}>
          <EmailInput
            placeholder='Enter your email and press Enter/Tab'
            value={this.state.email}
            isFetching={this.props.isFetching}
            isValid={this.props.isEmailValid}
            isPristine={this.props.isFormPristine}
            domains={this.props.domains}
            onBlur={validateEmail(this)}
            onKeyPress={validateEmailKeyPress(this)}
            onChange={changeEmail(this)}
          />

          {
            this.state.emailSuggestion &&
              <EmailOptionSuggestion
                email={this.state.emailSuggestion}
                onClick={setSuggestedEmail(this)}
              />
          }

          {errorMessages}

          {
            !this.props.isFormPristine && !this.props.isSmtpCheck && (
              <ErrorMessage message={'Sorry but we can\'t proceed without a valid email =('} />
            )
          }

          {
            this.props.isEmailValid && (
              <p className='success'>Thank you! Email successfully validated.</p>
            )
          }

        </Form>
      </div>
    );
  }
}

export default compose(
  withErrorBoundary,
  withMap,
  withEmailValidator
)(App);
