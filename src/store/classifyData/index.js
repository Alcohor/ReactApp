import * as types from './actionTypes'
import default_state from './default_state'
import actionCreators from './actionCreators'






const reducer = (previous_state = default_state,action)=>{
    let new_state = Object.assign({},previous_state)
    switch(action.type){
        case types.GET_NEW_DATA_ASYNC+"_FULFILLED":
        new_state = action.payload.data;break;

        default: return previous_state
    }
    return new_state
}
export default reducer