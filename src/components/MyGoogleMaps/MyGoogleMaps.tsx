import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import * as React from 'react';
import styles from './map_invoicesimple.json';

const MyGoogleMaps = (props: any) => (
  <Map
    google={props.google}
    zoom={14}
    styles={styles}
    draggable={true}
    fullscreenControl={true}
    panControl={true}
    initialCenter={{lat: props.lat, lng: props.lng}}
  >
    <Marker onClick={props.onMarkerClick} name={props.markerName} />
  </Map>
)

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCNn7LPh706GgJ6kjt3kpbHV4YrmCv3dRQ'
})(MyGoogleMaps)
