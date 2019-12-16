
export const initialState = {
    result: '',
   
 
}

function reducer(state = initialState, action,) {


    
    switch (action.type) {
        
        case 'calc':
            return {result:eval(JSON.stringify(action.payload))}
        case 'clear':
            return { result: '' }

        case 'INCREASE_COUNTER':
            return { ...state, result: state.result + action.id }
    }
    return state
}
export default reducer





