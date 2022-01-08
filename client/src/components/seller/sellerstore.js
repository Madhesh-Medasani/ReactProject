import {createStore} from "redux";
import sellerrootReducer from "./reducers/sellerrootReducer";
//Creating seeler store for maintaining of reducers whic are in root reducer 
const sellerstore = createStore(sellerrootReducer);


export default sellerstore

