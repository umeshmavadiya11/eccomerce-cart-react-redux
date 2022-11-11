import { createStore, applyMiddleware, compose  } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";  
import rootReducer from './reducers/rootReducer';

const middleware = [thunk];
const store = createStore(
    rootReducer,
      compose(  
        applyMiddleware(...middleware),  
    )  

);


export default store;