import { Actiontypes } from "../constants/Action-types";
import shopapi  from "../../apis/shopapi";

export const fetchProducts=()=>{
    return async function(dispatch){
        try{
            const res=await shopapi.get('/products')

    dispatch( {
        type:Actiontypes.FETCH_PRODUCTS,
        payload:res.data
    })

        }catch(error){
            console.log(error)


        }
    }
    
}

export const fetchProduct=id=>{
    return async function(dispatch){
        try{
            const res=await shopapi.get(`/products/${id}`)

    dispatch( {
        type:Actiontypes.SELECTED_PRODUCT,
        payload:res.data
    })

        }catch(error){
            console.log(error)


        }
    }
    
}

export const setProducts = products=>{
    return{
        type:Actiontypes.SET_PRODUCTS,
        payload:products
    };
}

export const selectedProduct=product=>{
    return{
        type:Actiontypes.SELECTED_PRODUCT,
        payload:product
    }
}

export const removeSelectedProduct=()=>{
    return{
        type:Actiontypes.REMOVE_SELECTED_PRODUCT
    };
}