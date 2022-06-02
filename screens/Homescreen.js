import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,Dimensions,FlatList,Image,ScrollView,ActivityIndicator,Pressable} from 'react-native';
import {getMovies,getActionMovies,getSuspenseMovies,getRomanticMovies,getAdventureMovies} from '../services/services';
import { SliderBox } from "react-native-image-slider-box";
import MovieList from '../components/MovieList';
import Error from '../components/Error';
import NavBar from '../components/NavBar';
import { useSelector,useDispatch} from 'react-redux';
import { setHomeLoading,setHomeError,setHomeMovies } from '../redux/actions';
export default function Homescreen({navigation})
{
        const {loading,error,movies} = useSelector(state=>state.home);
        const dispatch = useDispatch();
        /*const [error,setError] = useState(null);
        const [loading,setLoading] = useState(true);
        const [movies,setMovies]  = useState(null);*/
        const dimensions = Dimensions.get("screen");
         useEffect(()=>
         {
               getMovies().then((response)=>
               {
                 //setMovies(response.data.results);
                 dispatch(setHomeMovies(response.data.results));
                 //setLoading(false);
                 dispatch(setHomeLoading(false));
               }).catch((err)=>{dispatch(setHomeError(err.message))});
         },[]);
         const styles = StyleSheet.create(
           {
               movieTitle : {
                 color:"green"
               },
               loading:
               {
                   flex:1,
                   justifyContent:"center"
               }
           }
         );   
        return <React.Fragment>
        {
        !error ?  
      (!loading ?  
      <ScrollView style={{backgroundColor:"black"}}>
        <NavBar navigation={navigation}></NavBar>
        <SliderBox images={movies.map((movie)=>movie.image)} sliderBoxHeight={dimensions.height*3/5} dotStyle={{height:0}} autoPlay={true} circleLoop={true}/>
      <View>
        <MovieList title="Action" movies={getActionMovies(movies)} navigation={navigation}/>
      </View>
      <View>
        <MovieList title="Suspense" movies={getSuspenseMovies(movies)} navigation={navigation}/>
      </View>
      <View>
        <MovieList title="Adventure" movies={getAdventureMovies(movies)} navigation={navigation}/>
      </View>
      <View>
        <MovieList title="Romance" movies={getRomanticMovies(movies)} navigation={navigation}/>
      </View>
      </ScrollView> : <ActivityIndicator size='large' style={styles.loading}/>)
       : <Error message={error}/> 
      }
      </React.Fragment>
}