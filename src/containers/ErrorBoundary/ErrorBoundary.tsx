import * as React from 'react';

interface IState {
  hasError: boolean;
  errorMessage: string;
}

class ErrorBoundary extends React.Component {
  public state: IState = {
    errorMessage: '',
    hasError: false
  }

  public componentDidCatch(error: any) {
      this.setState({hasError: true, errorMessage: error})
  }

  public render() {
      if (this.state.hasError) {
          return (
            <h1>Oops! Something went wrong. <p>{this.state.errorMessage}</p></h1>
          )
      } else {
          return this.props.children;
      }
  }
}

export default ErrorBoundary;
