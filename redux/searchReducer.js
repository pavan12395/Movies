import { SET_SEARCH_LOADING,SET_SEARCH_MOVIES,SET_SEARCH_TEXT } from "./actions";

const initialState=
{
    searchMovies:null,
    searchLoading:true,
    searchText:""
}
export default function searchReducer(state=initialState,action)
{
    if(action.type==SET_SEARCH_MOVIES)
    {
        return {...state,searchMovies:action.payload};
    }
    else if(action.type==SET_SEARCH_LOADING)
    {
        return {...state,searchLoading:action.payload};
    }
    else if(action.type==SET_SEARCH_TEXT)
    {
        return {...state,searchText:action.payload};
    }
    return state;
}