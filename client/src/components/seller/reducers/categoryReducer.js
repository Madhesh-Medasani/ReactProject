let initialState ={
    cid: ""
}


const categoryReducer =(state=initialState,action)=>{
    switch (action.type){
        case "sendCategoryid":
            console.log(action.payload.cid)
            return{
                ...state,
                cid: action.payload.cid
            }
        default: return state
    }
}

export default categoryReducer