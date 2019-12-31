const initialState = {
    photos: [],
    isLoaded: false
}

export function photosReducer(state = initialState, action){
            switch(action.type){
                case "FETCH_PHOTOS":
                    
                    // console.log('this is the action payload',action.payload)
                    // debugger
                    return{
                        ...state,
                        photos: action.payload, // payload comes from the actions.js file line #63
                        isLoaded: true
                    }
                default: 
                    return state;
            }
}

export default photosReducer;