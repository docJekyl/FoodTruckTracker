import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { FaTruck } from 'react-icons/fa';
import token from './token.js';


function Map(props) {
  const [viewport, setViewport] = useState({
    latitude: 35.478426,
    longitude: -97.518800,
    width: '50vw',
    zoom: 10,
    height: '50vh'
  });


  return(
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken = {token}
        onViewportChange={viewport => {setViewport(viewport)}}
      >

        {props.ftData.map((truck) => (
          <Marker
            latitude={truck.latitude}
            longitude={truck.longitude}
          >
            <button className="markerBtn">
              <FaTruck />
            </button>
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  )
}



export default Map;