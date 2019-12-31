const initialState = {
    addresses: []
}

export function addressReducer(state = initialState, action){
            switch(action.type){
                case "FETCH_ADDRESS":
                    
                    // console.log('this is the action payload',action.payload) 
                    // debugger
                    return{
                        ...state,
                        addresses: action.payload // payload comes from the actions.js file line #9
                    }
                default: 
                    return state;
            }
}

export default addressReducer;