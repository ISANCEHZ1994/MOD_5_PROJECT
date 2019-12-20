import * as actionTypes from '../actions';

const initialState = {
    photographers: []
}

const photographerReducer = (state = initialState, action) => {
        switch(action.type){
            case actionTypes.FETCH_PHOTOGRAPHER:
                return{
                    ...state,
                    photographers: state.photographers + 1
                }
            default:
                return state
        }
}

export default photographerReducer;