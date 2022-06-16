// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
// import { Component } from 'react'

// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         style={{
//           width: '47vw',
//           height: '27vh',
//         }}
//         containerStyle={{
//           position: 'relative',
//           width: '100%',
//           height: '100%',
//         }}
//         zoom={14}
//       >
//         <Marker onClick={this.onMarkerClick} name={'Current location'} />
//       </Map>
//     )
//   }
// }

// const GoogleMap = GoogleApiWrapper({
//   apiKey: 'AIzaSyA0-O8o7phDIFY72L50o3mF1o336fE5p7s',
// })(MapContainer)

// export default GoogleMap

import React from 'react'
import { GoogleMap, LoadScriptNext } from '@react-google-maps/api'

const center = {
  lat: -3.745,
  lng: -38.523,
}

function GoogleMaps() {
  return (
    <LoadScriptNext googleMapsApiKey="AIzaSyA0-O8o7phDIFY72L50o3mF1o336fE5p7s">
      <GoogleMap
        mapContainerStyle={{
          width: '100%',
          height: '200px',
          border: '2px solid black',
        }}
        center={center}
        zoom={10}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScriptNext>
  )
}

export default React.memo(GoogleMaps)
