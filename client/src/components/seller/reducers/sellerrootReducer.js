import { combineReducers } from "redux";
import sellerReducer from "./sellerReducer"
import categoryReducer from "./categoryReducer"
import brandReducer from "./brandReducer"
//root reducer which combines all reducers 
const sellerrootReducer = combineReducers({brandReducer: brandReducer,categoryReducer: categoryReducer,sellerReducer: sellerReducer})

export default sellerrootReducer