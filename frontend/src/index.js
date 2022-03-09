
import ReactDOM  from "react-dom";
import { Provider, useSelector } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import App from "./app";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducer";
import {hobbyReducer} from "./reducers/hobbyReducer";


const store = createStore(combineReducers({users : userReducer, hobbies : hobbyReducer}), applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));