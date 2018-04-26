import classnames from 'classnames';
import * as React from 'react';
import email from '../../assets/email.png';
import '../../assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import spinner from '../../assets/spinner.svg';

import { withEmailSuggestion } from '../../components/hoc';
import './EmailInput.css';

const Input = (props: any) => <input {...props} />;
const InputSuggestion = withEmailSuggestion(Input);

const Email = (props: any) => {
  const classes = classnames({
    EmailInputWrap: true,
    alertInvalid: !props.isPristine && !props.isValid,
    alertValid: !props.isPristine && props.isValid,
    validateInput: true
  });

  return (
    <div className={classes}>
      <label className='label-input-email'>
				<img
          src={props.isFetching ? spinner : email}
          alt={props.isFetching ? 'loading' : 'email'}
        />
			</label>

      <InputSuggestion
        className='input-email'
        type='text'
        id='email'
        value={props.value}
        placeholder={props.placeholder}
        onBlur={props.onBlur}
        onKeyPress={props.onKeyPress}
        onChange={props.onChange}
        multiple={props.multiple}
        domains={props.domains}
        autoFocus={props.autoFocus}
      />

      <span className='focus-input-email-1' />
			<span className='focus-input-email-2' />
		</div>
  );
}

export default Email;
