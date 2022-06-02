import React,{useEffect,useState} from 'react';
import {getTrailer} from '../services/services';
import {ActivityIndicator,View,Text,Pressable} from 'react-native';
import Error from './Error';
import { useSelector,useDispatch } from 'react-redux';
import {setURI,setURILoading,setURIError} from '../redux/actions';
export default function TrailerPlayer(props)
{
    const {movieId,closeModal} = props;
    const dispatch = useDispatch();
    /*const [uri,setURI] = useState(null);
     const [error,setError] = useState("");
     const [loading,setLoading] = useState(true);
    */
   const {uri,uriError,uriLoading} = useSelector(state=>state.details);
    useEffect(()=>
    {
         getTrailer(movieId).then((response)=>
         {
             //setURI(response.data.result[0].url);
             dispatch(setURI(response.data.result[0].url));
             //setLoading(false);
             dispatch(setURILoading(false));
         }).catch((err)=>
         {
             //setError(err.message);
             dispatch(setURIError(err.message));
         })
    },[]);
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            {
                uriLoading ? <ActivityIndicator size={"large"}/> :
                    (uriError ? <Error message={err}/> :
                     <Text style={{fontSize:25,fontWeight:"bold",color:"black"}}>{uri}</Text>
                    )
            }
        </View>
    )
    
}