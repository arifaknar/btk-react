import * as actionTypes from "../actions/actionTypes"
import initialState from "../reducers/initialState"

export function categoryListReducer(state=initialState.categories,action) {
    switch (action.type) {
        case actionTypes.GET_CATEGORY_SUCCESS:
            return action.payload;
    
        default:
            return state;
    }    
}