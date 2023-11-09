import { combineReducers } from "redux";
import { calculatorReducer } from "../model/calculator/reducer.js";

const rootReducer = combineReducers({ calculatorReducer });

export default rootReducer;
