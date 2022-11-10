import { createStore } from "redux";
import Counter_reducers from "./Reducers/Counterreducers";

const store=createStore( Counter_reducers) 
export default store