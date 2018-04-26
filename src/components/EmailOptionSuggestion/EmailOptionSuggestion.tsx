import * as React from 'react';
import './EmailOptionSuggestion.css';

export interface ISFCEmailOptionSuggestionProps {
  email: string;
  onClick: (e: string) => any;
}

const EmailOptionSuggestion: React.SFC<ISFCEmailOptionSuggestionProps> = (props) => (
  <p>
    Did you mean <a className='EmailSuggestion' onClick={props.onClick(props.email)}> {props.email}</a>?
  </p>
);

export default EmailOptionSuggestion;
