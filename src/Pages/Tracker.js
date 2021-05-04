
import React, {useState,useEffect} from 'react';
//import axios from 'axios'
import Map from '../components/LeafletMap/Leaflet'

function Tracker(){

const[route,setRoute]=useState([]); //gets the routes pushed in
const[t,setT]=useState();  //used to clear interval on tracking 

const[startTime,setStartTime]=useState();
const[finsihTime,setFinishTime]=useState();


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
            route.push([lat,long])
            console.log(route);
            
        })
    }
}

function startTracking(){
    setStartTime(timeGetter());
    alert("tracking route. Press stop to see map of route taken");
    setT(setInterval(sendGeoData, 1000));
    
}




// const polyline = [
//     [51.50, -0.09],
//     [51.51, -0.1],
//     [51.58, -0.05],
//     [51.70, -0.1],
//     [51.80, -0.20],
//     [52, 0],
// ]

const[mapArray,setMapArray]=useState([]);
//const[mapArray,setMapArray]=useState([<Map polyline={polyline} initialStart={[51.50, -0.09]}/>]);

function stopTracking(){
    setMapArray(mapArray)
    console.log('stopped tracking');
    setT(clearInterval(t));
    setMapArray([<div className={"mapBox"}><Map polyline={route} initialStart={initialStart}/></div>]);
    console.log(startTime);
    setFinishTime(timeGetter());
}

function resetTracking(){
    setRoute([]);
    if('geolocation' in navigator){
        console.log('geolocation available');
        navigator.geolocation.getCurrentPosition(position=>{  
            const lat= position.coords.latitude;
            const long= position.coords.longitude;
            setInitialStart([lat,long]);
             })
         }
}

function timeGetter(){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return time;
}

    return(
        <div className="container">
        <h3>Track Exercise</h3>
        <button onClick={startTracking}>Start tracking</button>
        <button onClick={stopTracking}>Stop tracking</button>
        <button onClick={resetTracking}>Reset</button>

        {/* <Map polyline={polyline} initialStart={initialStart}/> */}
         {/* {route.map(coords=> <li>Lat: {coords.lat} Long: {coords.long}</li> )}  */}
         {mapArray.map((journey, i) => (
        <div key={i}>{journey}</div>
      ))}
      <p>Start time: {startTime}</p>
      <p>Finish Time: {finsihTime}</p>
   
    </div>
    )
    
};

export default Tracker;
