const initialState = {
    photographers: [],
    isLoaded: false,
    selectedPhotographer: null
}

export function photographerReducer(state = initialState, action){
            switch(action.type){
                case "FETCH_PHOTOGRAPHER":
                    // console.log('this is the action payload',action.payload)
                    // debugger
                    return{
                        ...state,
                        photographers: action.payload, // payload comes from the actions.js file line #13
                        isLoaded: true
                    }
                case "SELECT_PHOTOGRAP":
                    return{
                        ...state,
                        selectedPhotographer: action.payload 
                    }
                default: 
                    return state;
            }
}

export default photographerReducer;