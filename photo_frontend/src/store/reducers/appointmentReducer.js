import * as actionTypes from '../actions';

const initialState = {
    pending: false,
    appointments: [],
    error: null
}

export function appointmentReducer(state = initialState, action){
            switch(action.type){
                case actionTypes.FETCH_APPOINTMENT_PENDING:
                    return{
                        ...state,
                        pending: true
                    }
                case actionTypes.FETCH_APPOINTMENT_SUCCESS:
                    return{
                        ...state,
                        pending: false,
                        appointments: action.payload
                    }
                case actionTypes.FETCH_APPOINTMENT_ERROR:
                    return{
                        ...state,
                        pending: false,
                        error: action.error
                    }
                default: 
                return state;
            }
}



// const appointmentReducer = (state = initialState, action) => {
//         switch(action.type){
//             case actionTypes.FETCH_APPOINTMENT:
//                 return{
//                     ...state,
//                     appointments: state.appointments + 1
//                 }
            
//             default:
//                 return state
//         }
// }

export default appointmentReducer;