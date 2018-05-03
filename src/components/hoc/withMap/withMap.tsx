import * as React from 'react';
import { compose, setDisplayName } from 'recompose';
import { MyGoogleMaps } from '../..';

const withMap = (WrappedComponent: React.ComponentType) => {
  return (props: any) => (
    <React.Fragment>

      <section className='withMap'>
        <MyGoogleMaps
          markerName={'Beautiful British Columbia | Vancouver'}
          lat={49.2803838}
          lng={-123.1121465}
        />
      </section>

      <WrappedComponent {...props} />

    </React.Fragment>
  );
};

export default compose(
  setDisplayName('withMap'),
  withMap
);
