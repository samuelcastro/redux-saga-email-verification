import * as React from 'react';
import './SuccessMessage.css';

export interface ISFCSuccessMessageProps {
  message: string;
}

const SuccessMessage: React.SFC<ISFCSuccessMessageProps> = (props) => (
  <p className='SuccessMessage'>{props.message}</p>
);

export default SuccessMessage;
