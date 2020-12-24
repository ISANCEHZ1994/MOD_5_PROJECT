import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import ClientDashboard from './Components/ClientDashboard/ClientDashboard';
import AppointmentDashboard from './Components/AppointmentDashboard/AppointmentDashboard';
import SelectDate from './Components/SelectDate/SelectDate';

function App() {                                                 

  return (
    <BrowserRouter>
     <Switch>
        <Route path="/home_page" component={HomePage}/>
        <Route path="/client_dashboard" component={ClientDashboard}/>
        <Route path='/appointments_dashboard' component={AppointmentDashboard}/>
        <Route path='/select_date' component={SelectDate} />
    </Switch>
    </BrowserRouter>
  );
};
export default App;

//       <button onClick={ () => dispatch( handleAppointments )}> This is for Appointments </button>
//       <button onClick= { () => dispatch( handleClients ) }> This is for Clients </button>
//       <button onClick={ () => dispatch( handlePhotographers)}> This is for Photographers </button>
//       <button onClick={ () => dispatch( handlePhotos )}> This is for JUST PHOTOS </button> 
//       <button onClick={ () => dispatch( handleAddress )}> This is for Addresses </button>