import React, { useContext } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { UserContext } from '../components/UserContext/UseContext';
import LogoutButton from '../components/LogoutButton/LogoutButton'

function Home() {

  const msg = useContext(UserContext);
  console.log(msg.name + " this should be dbuser")


  const { user, isAuthenticated } = useAuth0();  //isAuthenticated will only render when logged 



  // console.log(dbUser)


  return (

    isAuthenticated && (
      <div className="container">

        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <h2>{user.email}</h2>
        </div>
        <div>
          <LogoutButton />
        </div>
      </div>

    )//authenticate
  )//return
};//end function

export default Home;

