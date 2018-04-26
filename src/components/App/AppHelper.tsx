import { contains, curry } from 'ramda';
import * as React from 'react';

// interface IState {
//   email: string
//   isEmailValid: boolean
// }
//
// interface IProps {
//   isEmailValid: boolean
//   validateEmailHandler: (email: string) => void
// }
//
// interface IContext {
//   state: IState
//   props: IProps
// }

// const validateEmailHandler = curry((context: any, email: string) => {
//   context.props.validateEmailHandler(email);
// })

export const validateEmail = curry((context: any, event: React.ChangeEvent<HTMLInputElement>) => {
  return context.props.validateEmailHandler(event.target.value)
});

export const changeEmail = curry((context: any, event: React.ChangeEvent<HTMLInputElement>) => {
  return context.setState({
    email: event.target.value
  })
});

export const validateEmailKeyPress = curry((context: any, event: React.KeyboardEvent<HTMLInputElement>) => {
  if (contains(event.key, ['Enter', 'Tab'])) {
    context.props.validateEmailHandler(event.currentTarget.value)
  }
})

export const setSuggestedEmail = curry((context: any, email: string, event: React.MouseEvent<HTMLInputElement>) => {
  context.setState({
    email,
    emailSuggestion: null
  })

  context.props.validateEmailHandler(email)
})
