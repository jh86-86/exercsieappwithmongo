import React, {useState,useEffect} from 'react';
//import Map from '../components/LeafletMap/Leaflet'
//import axios from 'axios'
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';

function Tracker(){

const[route,setRoute]=useState([{lat:0, long:0 }]);
const[t,setT]=useState();
const[displayCoods,setDisplayCoords]=useState(false);
let count=0;



function sendGeoData(){
    if('geolocation' in navigator){
        console.log('geolocation available');
        navigator.geolocation.getCurrentPosition(position=>{  
            const lat= position.coords.latitude;
            const long= position.coords.longitude;
            route.push({long,lat})
            console.log(route);
            count=count++;
        })
    }
}

function startTracking(){
   
    setT(setInterval(sendGeoData, 1000));
}



function stopTracking(){
    console.log('stopped tracking');
    setT(clearInterval(t));
}

const polyline = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ]

  const limeOptions = { color: 'lime' }


    return(
        <div className="container">
        <h3>Track Exercise</h3>
        <button onClick={startTracking}>Start tracking</button>
        <button onClick={stopTracking}>Stop tracking</button>

        <div id="mapid">
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height:400, width:"100%"}}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Polyline pathOptions={limeOptions} positions={polyline} />
</MapContainer>
</div>

         {route.map(coords=> <li>Lat: {coords.lat} Long: {coords.long}</li> )} 
         <p id="time-ptag"></p>
    </div>
    )
    
};

export default Tracker;
