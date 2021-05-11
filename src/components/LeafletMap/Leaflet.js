import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import React from 'react';
import css from './map.module.css'



function Map({polyline, initialStart}){

 

  const limeOptions = { color: 'lime' }

    return(
    <div >
      <MapContainer id={css.mapid} center={initialStart} zoom={13} scrollWheelZoom={false}>
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