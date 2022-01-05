const initialState = {
    sellername: ""
}


const sellerReducer =(state=initialState,action)=>{
    switch (action.type){
        case "loginSeller":
            console.log(action.payload.sellername)
            return{
                ...state,
                sellername: action.payload.sellername
            }
        default: return state
    }
}

export default sellerReducer