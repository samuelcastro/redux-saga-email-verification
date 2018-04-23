import * as React from 'react';
import './Form.css';

const Form = (props: any) => (
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
