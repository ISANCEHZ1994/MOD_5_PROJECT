const initialState = {
    appointments: []
}

export function appointmentReducer(state = initialState, action){
            switch(action.type){
                case "FETCH_APPOINTS":
                    
                    console.log('this is the action payload',action.payload) 
                    // debugger
                    return{
                        ...state,
                        appointments: action.payload // payload comes from the actions.js file line #9
                    }
                default: 
                    return state;
            }
}

export default appointmentReducer;