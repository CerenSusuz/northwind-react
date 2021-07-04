import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
    cart :cartReducer
    //tüm stateleri topladığım yer
})

export default rootReducer;