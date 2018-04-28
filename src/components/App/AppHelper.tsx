import { contains, curry } from 'ramda';
import * as React from 'react';

// Why did I create this helper?

// As a good practice I'm creating a vanila typescript helper decoupled from
// react to handle all business logic, this is important to keep projects
// isolated and non-dependent from any framework. For example if at some
// point you decide to use angular, vue.js or whatever you want you won't
// need to refactor your entire app. And this is extremily easy to test. - Samuel

export const validateEmail = curry((context: any, event: React.ChangeEvent<HTMLInputElement>) => {
  return context.props.validateEmailHandler(event.target.value);
});

export const changeEmail = curry((context: any, event: React.ChangeEvent<HTMLInputElement>) => {
  return context.setState({
    email: event.target.value
  });
});

export const validateEmailKeyPress = curry((context: any, event: React.KeyboardEvent<HTMLInputElement>) => {
  if (contains(event.key, ['Enter', 'Tab'])) {
    context.props.validateEmailHandler(event.currentTarget.value)
  }
});

export const setSuggestedEmail = curry((context: any, email: string, event: React.MouseEvent<HTMLInputElement>) => {
  context.setState({
    email,
    emailSuggestion: null
  });

  context.props.validateEmailHandler(email)
});
