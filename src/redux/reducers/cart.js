import * as actionType from '../actionsTypes'

const INITIAL_STATE = {
    loading: false,
    cartsData: []
};

const CartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case actionType.CART_LOADING:
            return {
                ...state, loading: action.payload,
            };

        case actionType.ADD_TO_CART:
            if(state?.cartsData?.find(d=>parseInt(d.id) === parseInt(action.payload.id))){
                return {
                    ...state, cartsData: state?.cartsData?.map(item=>parseInt(item.id ) === parseInt(action.payload.id)?
                    {...item,quantity:parseInt(item.quantity) + 1,totalAmout:parseFloat(item.price)* parseInt(item.quantity+1)}:
                    item)
                };
            }else{
                return {
                    ...state, cartsData: [...state.cartsData,{...action.payload,quantity:1,totalAmout:parseFloat(action.payload.price)}] ,
                };
            }
          

        case actionType.REMOVE_TO_CART:
            return {
                ...state, cartsData: state.cartsData.filter(item => parseInt(item.id) !== parseInt(action.payload)),
            };
        case actionType.INCREASE_CART_ITEM:
            return {
                ...state, cartsData: state.cartsData.map(item => parseInt(item.id) === parseInt(action.payload) ? { ...item, quantity: item.quantity + 1,totalAmout:parseFloat(item.price)* parseInt(item.quantity+1)} : item),
            };
        case actionType.DECREASE_CART_ITEM:
            return {
                ...state, cartsData: state.cartsData.map(item => parseInt(item.id) === parseInt(action.payload) ? { ...item, quantity: item.quantity - 1,totalAmout:parseFloat(item.price)* parseInt(item.quantity - 1) } : item),
            };
        case actionType.REMOVE_ALL_IN_CART:
            return {
                ...state, cartsData: action.payload,
            };

        default: return state;
    }

};

export default CartReducer;