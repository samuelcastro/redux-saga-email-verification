import * as React from 'react';
import './Form.css';

export interface ISFCFormProps {
  image?: any;
  title?: string;
}

const Form: React.SFC<ISFCFormProps> = (props) => (
  <div className='wrap-form'>
			<form className='form validate-form'>

        <span className='form-image'>
          <img src={props.image} className='form-img'/> {props.title}
				</span>

        {props.children}

      </form>
  </div>
)

export default Form;
