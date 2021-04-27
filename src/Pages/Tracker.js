import React, {useState,useEffect} from 'react';
//import Map from '../components/LeafletMap/Leaflet'
//import axios from 'axios'
import Map from '../components/LeafletMap/Leaflet'

function Tracker(){

const[route,setRoute]=useState([{lat:0, long:0 }]);
const[t,setT]=useState();


const[mapArray,setMapArray]=useState([]);
const[timer,setTimer]=useState(0);
let count=0;

const[initialStart, setInitialStart]=useState()

useEffect(()=> {
    function getStart(){
     if('geolocation' in navigator){
       console.log('geolocation available');
       navigator.geolocation.getCurrentPosition(position=>{  
           const lat= position.coords.latitude;
           const long= position.coords.longitude;
           setInitialStart([lat,long]);

            })
        }
    }
   getStart();
 } ,[]);



function sendGeoData(){
    if('geolocation' in navigator){
        console.log('geolocation available');
        navigator.geolocation.getCurrentPosition(position=>{  
            const lat= position.coords.latitude;
            const long= position.coords.longitude;
            route.push({long,lat})
            console.log(route);
        })
    }
}

function startTracking(){
    setT(setInterval(sendGeoData, 1000));
    setInterval(updateCount,1000);
    
}

function updateCount(){
    count++;
    setTimer(count);
    const timePtag= document.getElementById("time-ptag");
    timePtag.innerText=timer;
}



const polyline = [
    [51.50, -0.09],
    [51.51, -0.1],
    [51.58, -0.05],
    [51.70, -0.1],
    [51.80, -0.20],
    [52, 0],
]


function stopTracking(){
    console.log('stopped tracking');
    setT(clearInterval(t));
    setMapArray([<Map polyline={polyline} initialStart={initialStart}/> ]);
    setTimer(count);
    const timePtag= document.getElementById("time-ptag");
    timePtag.innerText=timer;
}



    return(
        <div className="container">
        <h3>Track Exercise</h3>
        <button onClick={startTracking}>Start tracking</button>
        <button onClick={stopTracking}>Stop tracking</button>

        {/* <Map polyline={polyline} initialStart={initialStart}/> */}
         {/* {route.map(coords=> <li>Lat: {coords.lat} Long: {coords.long}</li> )}  */}
         {mapArray.map((journey, i) => (
        <div key={i}>{journey}</div>
      ))}
         <p id="time-ptag"></p>
    </div>
    )
    
};

export default Tracker;
