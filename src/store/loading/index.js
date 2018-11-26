const reducer = (previous_state={isLoading:false},action)=>{
    let new_state = Object.assign({},previous_state)
    if(/_PENDING/.test(action.type)){
        new_state.isLoading = true
    }
    if(/_FULFILLED|_REJECTED/.test(action.type)){
        new_state.isLoading=false
    }
    return new_state
}

export default reducer