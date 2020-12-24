const initialState = {
    appointments: [],
    isLoaded: false,
};

export function appointmentReducer(state = initialState, action){
            switch(action.type){
                case "FETCH_APPOINTS":
                    return{
                        ...state,
                        appointments: action.payload, // payload comes from the actions.js file line #9
                        isLoaded: true
                    }
                case "CREATE_APPOINT":
                    return{
                        ...state,
                        appointments: [...state.appointments, action.payload],
                        isLoaded: false
                    }
                case "DELETE_APPOINT":
                    return{
                        ...state,
                        appointments: state.appointments.filter(appointment => appointment.id !== action.payload)
                    }
                default: 
                    return state;
            }
};

export default appointmentReducer;