import React from 'react';
import HomePage from './Components/HomePage';
// import NavBar from './NavBar';

import { handleAppointments, handleClients, handlePhotographers, handlePhotos, handleAddress } from './store/actions'; //imported from actions.js

import { useDispatch }  from 'react-redux';

function App() {
      // const [modalShow, setModalShow] = React.useState(false);


  const dispatch = useDispatch()                                                            

  return (
    <div className="App" >
     {/* <img src={'https://shelbycountyartscouncil.com/wp-content/uploads/2017/09/pexels-photo-226243.jpeg'} alt={'here is a photo'}/> */}
      
      <HomePage/>
      <button onClick={ () => dispatch( handleAppointments )}> This is for Appointments </button>
      <button onClick= { () => dispatch( handleClients ) }> This is for Clients </button>
      <button onClick={ () => dispatch( handlePhotographers)}> This is for Photographers </button>
      <button onClick={ () => dispatch( handlePhotos )}> This is for JUST PHOTOS </button> 
      <button onClick={ () => dispatch( handleAddress )}> This is for Addresses </button>
    </div>
  );
}

export default App;
