import * as React from 'react';
import { MyGoogleMaps } from '../..';

const withMap = (WrappedComponent: React.ComponentType) => {
  return (props: any) => (
    <React.Fragment>

      <section className='withMap'>
        <MyGoogleMaps
          markerName={'Invoice Simples'}
          lat={49.2817386}
          lng={-123.1117801}
        />
      </section>

      <WrappedComponent {...props} />

    </React.Fragment>
  );
};

export default withMap;
