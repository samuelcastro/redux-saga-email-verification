import * as React from 'react';
import email from '../../assets/email.png';
import './EmailInput.css';

const Email = (props: any) => {
  return (
    <div className='EmailInputWrap validate-input'>
      <label className='label-input-email'>
				<img src={email} alt='Email' />
			</label>
			<input className='input-email' type='text' name='email' placeholder='Email' />
			<span className='focus-input-email-1' />
			<span className='focus-input-email-2' />
		</div>
  );
}

export default Email;
