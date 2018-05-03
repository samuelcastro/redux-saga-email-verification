import * as React from 'react';
import { compose } from 'recompose';
import { Form } from '../';
import { EmailInput, EmailOptionSuggestion, Messages } from '../../components';
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
  errorMessages: any[];
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
};

class App extends React.Component<IStatefulAppProps, IAppState> {
  public state = {
    email: '',
    emailSuggestion: this.props.emailSuggestion
  };

  public componentWillReceiveProps(props: any) {
    this.setState({
      emailSuggestion: props.emailSuggestion
    });
  };

  public render() {
    return (
      <div className='App'>
        <Form title='Enter your email and press Enter/Tab'>
          <EmailInput
            placeholder='Email'
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

          <Messages
            errors={this.props.errorMessages}
            errorWhen={!!this.props.errorMessages}
            warning='Oops! You need to provide a valid email. =('
            warningWhen={!this.props.isFormPristine && !this.props.isSmtpCheck && !this.props.errorMessages.length}
            success='Thank you! Email successfully validated.'
            successWhen={this.props.isEmailValid}
          />

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
