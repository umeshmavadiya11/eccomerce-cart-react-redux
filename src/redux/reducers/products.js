import * as actionType from '../actionsTypes'

const INITIAL_STATE = {
    loading: false,
    home:[],
    data: []
};

const ProductsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case actionType.PRODUCT_LOADING:
            return {
                ...state, loading: action.payload,
            };

        case actionType.GET_ALL_PRODUCTS:
            return {
                ...state,
                data: action.payload,
            };
            case actionType.HOME_DATA:
            return {
                ...state,
                home:action.payload
            };

        default: return state;
    }

};

export default ProductsReducer;