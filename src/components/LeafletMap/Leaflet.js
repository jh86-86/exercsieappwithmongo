import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import React from 'react';
import css from './map.module.css'



function Map({polyline, initialStart}){

 

  const limeOptions = { color: 'lime' }

    return(
    <div id={css.mapid}>
      <MapContainer center={initialStart} zoom={13} scrollWheelZoom={false} style={{height:200, width:200}}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Polyline pathOptions={limeOptions} positions={polyline} />
</MapContainer>
    </div>
    )
}

export default Map;