const initialState = {
    sellername: ""
}

//Reducer for exporting the seller name as state after Login
const sellerReducer =(state=initialState,action)=>{
    switch (action.type){
        case "loginSeller":
            console.log(action.payload.sellername)
            return{
                ...state,
                sellername: action.payload.sellername
            }

            case "Logout":
                return{
                    ...state,
                   sellername: ""
                }
        default: return state
    }
}

export default sellerReducer