const initialState = {
    photographers: []
}

export function photographerReducer(state = initialState, action){
            switch(action.type){
                case "FETCH_PHOTOGRAPHER":
                    
                    console.log('this is the action payload',action.payload)
                    // debugger
                    return{
                        ...state,
                        photographers: action.payload // payload comes from the actions.js file line #13
                    }
                default: 
                    return state;
            }
}

export default photographerReducer;