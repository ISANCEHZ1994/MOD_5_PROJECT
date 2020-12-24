import { combineReducers } from 'redux'; 

import clientReducer from './clientReducer';
import photographerReducer from './photographerReducer';
import appointmentReducer from './appointmentReducer';
import photosReducer from './photosReducer'
import addressReducer from './addressReducer'

const rootReducer = combineReducers({
    clients: clientReducer,
    photographers: photographerReducer,
    appointments: appointmentReducer,
    photos: photosReducer,
    addresses: addressReducer
})


export default rootReducer;