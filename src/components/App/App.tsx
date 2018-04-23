import * as React from 'react';
import { EmailInput, Form } from '../';
import image from '../../assets/invoicesimples.png';
import { withMap } from '../hoc'
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className='App'>
        <Form image={image}>
          <EmailInput />
        </Form>
      </div>
    );
  }
}

export default withMap(App);
