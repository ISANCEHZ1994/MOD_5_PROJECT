const initialState = {
    clients: [],
    newClient: false,
}

export function clientReducer(state = initialState, action){
            switch(action.type){
                case "FETCH_CLIENTS":
                    
                    console.log('this is the action payload',action.payload)
                    // debugger
                    return{
                        ...state,
                        clients: action.payload // payload comes from the actions.js file line #33
                    }
                case "NEW_CLIENT":
                    return{
                        ...state,
                        newClient: true // I want this is turn true when the user signs up with his information
                    }
                default: 
                    return state;
            }
}

export default clientReducer;