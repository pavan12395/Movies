export const SET_HOME_LOADING = "set_home_loading";
export const SET_HOME_ERROR = "set_home_error";
export const SET_HOME_MOVIES="set_home_movies";
export const SET_MODAL_VISIBLE = "set_modal_visible";
export const SET_URI = "set_uri";
export const SET_URI_LOADING = "set_uri_loading";
export const SET_URI_ERROR = "set_uri_error";
export const SET_SEARCH_LOADING="set_search_loading";
export const SET_SEARCH_MOVIES = "set_search_movies";
export const SET_SEARCH_TEXT = "set_search_text";

export const setHomeLoading=(loading)=>
{
    return (dispatch)=>
    {
        dispatch({type:SET_HOME_LOADING,payload:loading});
    }
}

export const setHomeError=(error)=>
{
    return (dispatch)=>
    {
        dispatch({type:SET_HOME_ERROR,payload:error});
    }
}

export const setHomeMovies = (movies)=>
{
    return (dispatch)=>
    {
        dispatch({type:SET_HOME_MOVIES,payload:movies});
    }
}

export const setModalVisible=(modal_bool)=>
{
     return (dispatch)=>
     {
         dispatch({type:SET_MODAL_VISIBLE,payload:modal_bool});
     }
}

export const setURI = (uri)=>
{
    return (dispatch)=>
    {
        dispatch({type:SET_URI,payload:uri});
    }
}

export const setURILoading = (loading)=>
{
    return (dispatch)=>
    {
        dispatch({type:SET_URI_LOADING,payload:loading});
    }
}

export const setURIError = (error)=>
{
    return (dispatch)=>
    {
        dispatch({type:SET_URI_ERROR,payload:error});
    }
}

export const setSearchLoading = (loading)=>
{
    return (dispatch)=>
    {
        dispatch({type:SET_SEARCH_LOADING,payload:loading});
    }
}
export const setSearchMovies=(movies)=>
{
    return (dispatch)=>
    {
        dispatch({type:SET_SEARCH_MOVIES,payload:movies});
    }
}
export const setSearchText=(text)=>
{
    return (dispatch)=>
    {
        dispatch({type:SET_SEARCH_TEXT,payload:text});
    }
}