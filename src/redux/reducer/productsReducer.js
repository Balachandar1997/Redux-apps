import { Actiontypes } from "../constants/Action-types";

const initialState ={
    products:[]
}

export const productsReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case Actiontypes.SET_PRODUCTS:
            return {...state,products:payload}
         case Actiontypes.FETCH_PRODUCTS:
                return {...state,products:payload}
        default:
            return state;
    }
}

export const selectedProductsReducer=(state={},{type,payload})=>{
    switch(type){
        case Actiontypes.SELECTED_PRODUCT:
            return {...state,...payload}
        case Actiontypes.REMOVE_SELECTED_PRODUCT:
            return{}
        default:
            return state;
    }
}