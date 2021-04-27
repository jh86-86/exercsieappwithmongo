import React, {useState,useEffect} from 'react';
//import Map from '../components/LeafletMap/Leaflet'
//import axios from 'axios'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function Tracker(){

const[route,setRoute]=useState([{lat:0, long:0 }]);
const[t,setT]=useState();
const[displayCoods,setDisplayCoords]=useState(false);
let count=0;


useEffect(()=> {
     function getMenu(){
        const timePtag= document.getElementById("time-ptag");
        timePtag.textContent=`${count}`;
    }
    getMenu();
  } ,[t]);


function sendGeoData(){
    if('geolocation' in navigator){
        console.log('geolocation available');
        navigator.geolocation.getCurrentPosition(position=>{  
            const lat= position.coords.latitude;
            const long= position.coords.longitude;
            route.push({long,lat})
            console.log(route);
            count++;
        })
    }
}

function startTracking(){
   
    setT(setInterval(sendGeoData, 3000));
}



function stopTracking(){
    console.log('stopped tracking');
    setT(clearInterval(t));
}




    return(
        <div className="container">
        <h3>Track Exercise</h3>
        <button onClick={startTracking}>Start tracking</button>
        <button onClick={stopTracking}>Stop tracking</button>

        <div id="mapid">
        <MapContainer  center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
   
  </Marker>
</MapContainer>
</div>

         {route.map(coords=> <li>Lat: {coords.lat} Long: {coords.long}</li> )} 
         <p id="time-ptag"></p>
    </div>
    )
    
};

export default Tracker;
