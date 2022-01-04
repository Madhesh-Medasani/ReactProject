import { combineReducers } from "redux";
import sellerReducer from "./sellerReducer"
import categoryReducer from "./categoryReducer"
import brandReducer from "./brandReducer"

const sellerrootReducer = combineReducers({brandReducer: brandReducer,categoryReducer: categoryReducer,sellerReducer: sellerReducer})

export default sellerrootReducer