import * as React from 'react';
import { compose, setDisplayName } from 'recompose';
import ErrorBoundary from '../../ErrorBoundary';

const withErrorBoundary = (WrappedComponent: React.ComponentType) => {
  return (props: any) => (
    <ErrorBoundary>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  );
};

export default compose(
  setDisplayName('withErrorBoundary'),
  withErrorBoundary
);
