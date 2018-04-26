import * as React from 'react';

export interface ISFCErrorMessageProps {
  message: string;
}

const ErrorMessage: React.SFC<ISFCErrorMessageProps> = (props) => (
  <p className='errorMessage'>{props.message}</p>
);

export default ErrorMessage;
