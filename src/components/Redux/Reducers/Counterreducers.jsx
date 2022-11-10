//Reducer

const initialState={number:0git}

const  Counter_reducers =(state=initialState, action)=>{
    
    switch (action.type) {
        case "INCREMENT_COUNTER":
            return {...state, number:state.number+1}

         case  "DECREMENT_COUNTER":
            return {...state, number:state.number-1}
    
        default:
            return state;
    }
}
export default  Counter_reducers