import * as actionType from "../actionsTypes"

const SetLoading=(type)=>{
    return{
        type:actionType.CART_LOADING,
        payload:type
    }
}

export const AddToCart=(data)=> async(dispatch)=>{
    dispatch(SetLoading(true));
    dispatch({
        type:actionType.ADD_TO_CART,
        payload:data
    })
    dispatch(SetLoading(false));
}

export const RemoveToCart=(id)=> async(dispatch)=>{
    dispatch(SetLoading(true));
    dispatch({
        type:actionType.REMOVE_TO_CART,
        payload:id
    })
    dispatch(SetLoading(false));
}

export const RemoveToAllInCart=()=> async(dispatch)=>{
    dispatch(SetLoading(true));
    dispatch({
        type:actionType.REMOVE_ALL_IN_CART,
        payload:[]
    })
    dispatch(SetLoading(false));
}

export const IncreaseInCart=(id)=> async(dispatch)=>{
    dispatch(SetLoading(true));
    dispatch({
        type:actionType.INCREASE_CART_ITEM,
        payload:id
    })
    dispatch(SetLoading(false));
}

export const DecreaseInCart=(id)=> async(dispatch)=>{
    dispatch(SetLoading(true));
    dispatch({
        type:actionType.DECREASE_CART_ITEM,
        payload:id
    })
    dispatch(SetLoading(false));
}
