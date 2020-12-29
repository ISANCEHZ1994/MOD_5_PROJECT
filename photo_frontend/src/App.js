import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import ClientDashboard from './Components/ClientDashboard/ClientDashboard';
import AppointmentDashboard from './Components/AppointmentDashboard/AppointmentDashboard';
import SelectDate from './Components/SelectDate/SelectDate';
import MailConfirm from './Components/MailConfirm';

function App() {                                                 

  return (
    <BrowserRouter>
     <Switch>
        <Route path="/home_page" component={HomePage}/>
        <Route path="/client_dashboard" component={ClientDashboard}/>
        <Route path='/mail_confirmation' component={MailConfirm}/>
        <Route path='/appointments_dashboard' component={AppointmentDashboard}/>
        <Route path='/select_date' component={SelectDate} />
    </Switch>
    </BrowserRouter>
  );
};
export default App;