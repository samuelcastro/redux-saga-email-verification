import * as React from 'react';
import './Form.css';

export interface ISFCFormProps {
  title?: string;
}

const Form: React.SFC<ISFCFormProps> = (props) => (
  <div className='wrap-form'>
			<form className='form validate-form'>
        <div className='title'>{props.title}</div>

        {props.children}

      </form>
  </div>
)

export default Form;
