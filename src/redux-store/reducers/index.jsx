import setCommonPincode from "./SetPincode";
import setCommonMessId from "./SetMessId";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  setCommonPincode,
  setCommonMessId,
});

export default rootReducer;
