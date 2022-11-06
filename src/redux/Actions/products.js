import { request } from "../../util/APIHelper";
import * as actionType from "../actionsTypes";

const SetLoading=(type)=>{
    return{
        type:actionType.PRODUCT_LOADING,
        payload:type
    }
}

export const getAllProducts=()=> async(dispatch)=>{
        dispatch(SetLoading(true));
        request("GET","/products").then(res=>{
            const data=JSON.parse(JSON.stringify(res.data))
        dispatch({
            type:actionType.GET_ALL_PRODUCTS,
            payload:res.data
        })
        dispatch({
           type:actionType.HOME_DATA,
           payload:data.splice(0,4) 
        })
        })
        .catch(err=>console.log(err)).finally(()=> dispatch(SetLoading(false)))
}

