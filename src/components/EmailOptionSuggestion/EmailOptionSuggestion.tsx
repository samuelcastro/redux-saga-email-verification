import * as React from 'react';
import './EmailOptionSuggestion.css';

const EmailOptionSuggestion = (props: any) => (
  <p>
    Did you mean <a className='EmailSuggestion' onClick={props.onClick(props.email)}> {props.email}</a>?
  </p>
);

export default EmailOptionSuggestion;
