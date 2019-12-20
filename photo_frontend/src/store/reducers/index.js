import { combineReducers } from 'redux'; 


import clientReducer from './clientReducer';
import photographerReducer from './photographerReducer';
import appointmentReducer from './appointmentReducer';

const rootReducer = combineReducers({
    clients: clientReducer,
    photographers: photographerReducer,
    appointments: appointmentReducer
})


export default rootReducer;