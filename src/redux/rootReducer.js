import { combineReducers } from "redux";
import productsReducer from "./products/productsReducer";


const rootReducer = combineReducers({
    productState: productsReducer,
})

export default rootReducer;