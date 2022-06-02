import { SET_MODAL_VISIBLE, SET_URI, SET_URI_ERROR, SET_URI_LOADING } from "./actions";
const initalState = {modal:false,uri:null,uriLoading:true,uriError:false};
export const detailsReducer=(state=initalState,action)=>
{
    if(action.type==SET_MODAL_VISIBLE)
    {
        return {...state,modal:action.payload};
    }
    else if(action.type==SET_URI)
    {
        return {...state,uri:action.payload};
    }
    else if(action.type==SET_URI_LOADING)
    {
        return {...state,uriLoading:action.payload};
    }
    else if(action.type==SET_URI_ERROR)
    {
        return {...state,uriError:action.payload};
    }
    return state;
}