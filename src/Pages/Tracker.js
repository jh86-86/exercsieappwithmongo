import React, { useState,useContext } from 'react';
import axios from 'axios'
import Map from '../components/LeafletMap/Leaflet';
import { UserContext } from "../components/UserContext/UseContext";

function Tracker() {

    const dbuser = useContext(UserContext);
    console.log(dbuser.name + " this should be dbuser for tracker")

    const [route, setRoute] = useState([
    ]); //gets the routes pushed in
    const [t, setT] = useState();  //used to clear interval on tracking 

    const [startTime, setStartTime] = useState();
    const [finishTime, setFinishTime] = useState();


    const [initialStart, setInitialStart] = useState();//initialstart position set by useEffect



    function submitToDatabase() {
        const exercsieRoute = {
            username: dbuser.name,  //needs a state passed down with auth0
            startTime: startTime,
            finishTime: finishTime,
            route: route
        }

        console.log(exercsieRoute);
        let uri = process.env.REACT_APP_ATLAS_URI_MON;
        //never used axios before but have underthehood headers,options,method
        axios.post(`${uri}exerciseroutes/add`, exercsieRoute)
            .then(res => console.log(res.data));
    }






    // useEffect(() => {
    //     function getStart() {
    //         if ('geolocation' in navigator) {
    //             console.log('geolocation available');
    //             navigator.geolocation.getCurrentPosition(position => {
    //                 const lat = position.coords.latitude;
    //                 const long = position.coords.longitude;
    //                 setInitialStart([lat, long]);
    //             })
    //         }
    //     }
    //     getStart();
    // }, []);



    function sendGeoData() {
        if ('geolocation' in navigator) {
            console.log('geolocation available');
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude;
                const long = position.coords.longitude;
                setInitialStart([lat,long])
                console.log(initialStart)
                route.push([lat, long])
                console.log(route);

            })
        }
    }

    function startTracking() {
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

    const [mapArray, setMapArray] = useState([]);
    //const[mapArray,setMapArray]=useState([<Map polyline={polyline} initialStart={[51.50, -0.09]}/>]);

    function stopTracking() {
        setMapArray(mapArray)
        console.log('stopped tracking');
        setT(clearInterval(t));
        setMapArray([<div className={"mapBox"}><Map polyline={route} initialStart={route[0]} /></div>]);
        console.log(startTime);
        setFinishTime(timeGetter());
    }

    function resetTracking() {
        setRoute([]);
        if ('geolocation' in navigator) {
            console.log('geolocation available');
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude;
                const long = position.coords.longitude;
                setInitialStart([lat, long]);
            })
        }
    }

    function timeGetter() {
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        console.log(typeof time)
        return time;
    }

    return (
        <div className="container">
            <h3>Track Exercise</h3>
            <button onClick={startTracking}>Start tracking</button>
            <button onClick={stopTracking}>Stop tracking</button>
            <button onClick={resetTracking}>Reset</button>
            <button onClick={submitToDatabase}>Save route to profile</button>

            {/* <Map polyline={polyline} initialStart={initialStart}/> */}
            {/* {route.map(coords=> <li>Lat: {coords.lat} Long: {coords.long}</li> )}  */}
            {mapArray.map((journey, i) => (
                <div key={i}>{journey}</div>
            ))}
            <p>Start time: {startTime}</p>
            <p>Finish Time: {finishTime}</p>

        </div>
    )

};

export default Tracker;
