import { SET_HOME_LOADING,SET_HOME_ERROR,SET_HOME_MOVIES } from "./actions";

const initialState=
{
    movies:null,
    error:"",
    loading:true
}

export const homeReducer = (state=initialState,action)=>
{
    if(action.type==SET_HOME_ERROR)
    {
        return {...state,error:action.payload};
    }
    else if(action.type==SET_HOME_LOADING)
    {
        return {...state,loading:action.payload};
    }
    else if(action.type==SET_HOME_MOVIES)
    {
        return {...state,movies:action.payload};
    }
    return state;
}