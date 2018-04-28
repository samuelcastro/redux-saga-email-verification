import { map } from 'ramda';
import * as React from 'react';
import { ErrorMessage, SuccessMessage } from '../../components';

export interface ISFCMessageProps {
  errors: any[];
  errorWhen: boolean;
  success: string;
  successWhen: boolean;
  warning: string;
  warningWhen: boolean;
}

const Messages: React.SFC<ISFCMessageProps> = (props) => {  
  const errorMessages = props.errorWhen && map((item: any) => (
      <ErrorMessage message={item.Error} key={item.Error}/>
  ), props.errors);

  const warningMessage = props.warningWhen && (
    <ErrorMessage message={props.warning} />
  )

  const successMessage = props.successWhen && (
    <SuccessMessage message={props.success} />
  )

  return (
    <React.Fragment>
      {errorMessages}
      {warningMessage}
      {successMessage}
    </React.Fragment>
  )
};

export default Messages;
