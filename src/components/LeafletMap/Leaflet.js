import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import React,{useEffect,useState} from 'react';



function Map({polyline, initialStart}){

 

  const limeOptions = { color: 'lime' }

    return(
    <div id="mapid">
      <MapContainer center={initialStart} zoom={10} scrollWheelZoom={false} style={{height:400, width:"100%"}}>
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