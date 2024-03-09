import { combineReducers } from "redux";
import TableReducer from "./TableReducer";
import FilterReducer from "./filterreducer";
import OrderReducer from "./orderreducer";

const reducer=combineReducers({
    TableReducer:TableReducer,
    FilterReducer:FilterReducer,
    OrderReducer:OrderReducer
})

export default reducer;