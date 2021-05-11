import { useState, useContext, useEffect } from 'react';
import Map from '../components/LeafletMap/Leaflet';
import { UserContext } from "../components/UserContext/UseContext";
import axios from 'axios';

//a page which displays revious runs


function PreviousRuns() {


  const [allRoutes, setAllRoutes] = useState([]);
  const dbuser = useContext(UserContext);

  // function getRoutes(){
  // let uri = process.env.REACT_APP_ATLAS_URI_MON;
  //       axios.get(`${uri}exerciseroutes/searchname?username=${dbuser.name}`)
  //           .then(response => {
  //               console.log(response.data)
  //               setAllRoutes(response.data)
  //           })
  //           .catch((error) => {
  //               console.log(error);
  //           })
  //         };

  //   getRoutes();

  useEffect(() => {
    async function getAllRoutes() {
      let uri = process.env.REACT_APP_ATLAS_URI_MON;
      axios.get(`${uri}exerciseroutes/searchname?username=${dbuser.name}`)
                .then(response => {
                    console.log(response.data)
                    setAllRoutes(response.data)
                })
                .catch((error) => {
                    console.log(error);
                })

    }
    getAllRoutes();
  },[dbuser]);



  return (
    <div id="routes-container">

        <div>
          <h1>Previous routes</h1>
          {allRoutes.map((journey, i) => (
            <div id="previous-routes" key={i}>
              <Map polyline={journey.route} initialStart={journey.route[0]} />
              <p>User: {journey.username}</p>
              <p>Start time: {journey.startTime}</p>
              <p>Finish Time: {journey.finishTime}</p>
              <p>Date: {journey.createdAt.slice(0, 10)}</p>
            </div>
          ))}
        </div>
   
    </div>
  )
}

export default PreviousRuns;