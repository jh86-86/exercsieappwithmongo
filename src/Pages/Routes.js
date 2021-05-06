import { useState, useEffect } from 'react';
import Map from '../components/LeafletMap/Leaflet';











function PreviousRuns(){

    const[allRoutes,setAllRoutes]=useState([]);

    useEffect(()=> {
    async function getAllRoutes(){
        let uri=process.env.REACT_APP_ATLAS_URI_MON;
    let response =  await fetch(uri+'exerciseroutes');
    let data = await response.json();
      setAllRoutes(data);
      console.log(data);
  
    }
    getAllRoutes();
  } ,[]);




  
    return(
        <div>
            <h1>Previous routes</h1>
            {allRoutes.map((journey, i) => (
        <div id="previous-routes"key={i}><Map polyline={journey.route} initialStart={journey.route[0]}/>
        <p>User: {journey.username}</p>
        <p>Start time: {journey.startTime}</p>
        <p>Finish Time: {journey.finishTime}</p>
        <p>Date: {journey.createdAt.slice(0, 10)}</p>
        </div>
      ))}
        </div>
    )
}

export default PreviousRuns;