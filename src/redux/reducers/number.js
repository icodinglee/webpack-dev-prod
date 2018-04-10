const initialState={
    number: 25
}
  
export default (state = initialState, action = {} ) => {
    switch(action.type){
        case 'ADD_NUMBER':
            return {
                number: state.number + 1
            }
        case 'DEC_NUMBER':
            return {
                number: state.number - 1
            }
        case 'RESET_NUMBER':
            return {
                number: action.number
            }
        default:
            return state
    }
}