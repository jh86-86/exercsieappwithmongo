
import React, {useState,useEffect} from 'react';
//import Map from '../components/LeafletMap/Leaflet'
//import axios from 'axios'
import Map from '../components/LeafletMap/Leaflet'

function Tracker(){

const[route,setRoute]=useState([]);
const[t,setT]=useState();



const[timer,setTimer]=useState(0);


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
            console.log(lat,long)
            route.push([lat,long])
            console.log(route);
        })
    }
}

function startTracking(){
    alert("tracking route. Press stop to see map of route taken");
    setT(setInterval(sendGeoData, 1000));
    
}




const polyline = [
    [51.50, -0.09],
    [51.51, -0.1],
    [51.58, -0.05],
    [51.70, -0.1],
    [51.80, -0.20],
    [52, 0],
]

const[mapArray,setMapArray]=useState([<Map polyline={polyline} initialStart={[51.50, -0.09]}/>]);

function stopTracking(){
    console.log('stopped tracking');
    setT(clearInterval(t));
    mapArray.push([<div className={"mapBox"}><Map polyline={route} initialStart={initialStart}/></div> ]);
    setTimer(timer+1);
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
         <p>Currently in development but does track coords. Hardcoded route for London currently to demonstrate the route. But if you
             click on the start button and then press the stop it should bring up another map.
         </p>
    </div>
    )
    
};

export default Tracker;
