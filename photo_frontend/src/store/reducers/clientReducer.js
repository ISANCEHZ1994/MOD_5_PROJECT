import * as actionTypes from '../actions';

const initialState = {
    pending: false,
    clients: [],
    error: null
}


const clientReducer = (state = initialState, action) => {
        switch(action.type){
            case actionTypes.FETCH_CLIENT:
                return{
                    ...state,
                    clients: state.clients + 1
                }
            
            default:
                return state
        }
}

export default clientReducer;