import default_state from './defaultState'
import * as types from './actionTypes'
const reducer = (
    previous_state = default_state,
    action
)=>{
    let new_state =Object.assign({},previous_state)
    switch(action.type){
        case types.ASYNC_GET_GOODS_INFO+'_FULFILLED':
            new_state = action.payload.data;
            break;
        default:return previous_state    
    }
    return new_state
}

export default reducer  