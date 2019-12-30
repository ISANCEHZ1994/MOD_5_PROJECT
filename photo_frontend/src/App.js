import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import ClientDashboard from './Components/ClientDashboard/ClientDashboard';
// import NavBar from './NavBar';

import { handleAppointments, handleClients, handlePhotos, handleAddress } from './store/actions'; //imported from actions.js

import { useDispatch }  from 'react-redux';

function App() {
      // const [modalShow, setModalShow] = React.useState(false);


  const dispatch = useDispatch()                                                            

  return (
    <BrowserRouter>
    <div >
     {/* <img src={'https://shelbycountyartscouncil.com/wp-content/uploads/2017/09/pexels-photo-226243.jpeg'} alt={'here is a photo'}/> */}
      <Route path="/home_page" component={HomePage}/>
      <Route path ="/client_dashboard" component={ClientDashboard}/>
      {/* <HomePage/> */}
      <br/>
      <br/>
      <button onClick={ () => dispatch( handleAppointments )}> This is for Appointments </button>
      <button onClick= { () => dispatch( handleClients ) }> This is for Clients </button>
      {/* <button onClick={ () => dispatch( handlePhotographers)}> This is for Photographers </button> */}
      <button onClick={ () => dispatch( handlePhotos )}> This is for JUST PHOTOS </button> 
      <button onClick={ () => dispatch( handleAddress )}> This is for Addresses </button>
    </div>
    </BrowserRouter>
  );
}

export default App;
