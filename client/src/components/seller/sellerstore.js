import {createStore} from "redux";
import sellerrootReducer from "./reducers/sellerrootReducer";

const sellerstore = createStore(sellerrootReducer);


export default sellerstore

