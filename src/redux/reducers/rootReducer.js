import { combineReducers } from 'redux';
import CartReducer from './cart';
import ProductsReducer from './products';

const rootReducer = combineReducers({

    produtcs: ProductsReducer,
    cart:CartReducer

});

export default rootReducer;