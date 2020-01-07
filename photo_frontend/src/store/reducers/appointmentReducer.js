const initialState = {
    appointments: [],
    isLoaded: false,
    // dataSent: {}
}

export function appointmentReducer(state = initialState, action){
            switch(action.type){
                case "FETCH_APPOINTS":
                    
                    // console.log('this is the action payload',action.payload) 
                    // debugger
                    return{
                        ...state,
                        appointments: action.payload, // payload comes from the actions.js file line #9
                        isLoaded: true
                    }
               
                // case "SAVE_APPOINT":
                //     return{
                //         ...state,
                //         dataSent: action.payload
                //     }
                case "CREATE_APPOINT":
                    console.log(action.payload)
                    // debugger
                    return{
                        ...state,
                        appointments: [...state.appointments, action.payload],
                        isLoaded: false
                    }
                case "DELETE_APPOINT":
                    return{
                        ...state,
                        appointments: state.appointments.filter(appointment => appointment.id!== action.payload)
                    }
                default: 
                    return state;
            }
}

export default appointmentReducer;