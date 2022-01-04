let initialState ={
    brand: ""
}


const brandReducer =(state=initialState,action)=>{
    switch (action.type){
        case "sendBrand":
            console.log(action.payload.brand)
            return{
                ...state,
                brand: action.payload.brand
            }
        default: return state
    }
}

export default brandReducer