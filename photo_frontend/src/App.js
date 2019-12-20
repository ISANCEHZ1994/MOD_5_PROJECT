import React from 'react';
import HomePage from './HomePage'
import NavBar from './NavBar'

import { useSelector, useDispatch }  from 'react-redux';

function App() {

  const appointments = useSelector(state => state.appointmemnts)//calls from the reducer index where we assigned the apponitment property which leads the appointment reducer
   // reducer folder / index --> appointmentReducer.js
  const dispatch = useDispatch()                                                            

  return (
    <div className="App">
      HELLO FROM THE APP PAGE! Here is where we will Have all the pretty Components!
      <NavBar/>
      <HomePage/>
      <button onClick={dispatch()}> Fetch my shit.com </button>
    </div>
  );
}

export default App;
