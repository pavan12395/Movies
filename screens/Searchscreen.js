import React,{useState,useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput,StyleSheet,Dimensions,View,ActivityIndicator,ScrollView} from 'react-native';
import { getMovies } from '../services/services';
import MovieCard from '../components/MovieCard';
import { useSelector,useDispatch} from 'react-redux';
import { setSearchMovies,setSearchLoading,setSearchText } from '../redux/actions';
export default function Searchscreen({navigation})
{
    /*const [search,setSearch] = useState("");
    const [movies,setMovies] = useState(null);
    const [loading,setLoading] = useState(true);*/
    const {searchText,searchLoading,searchMovies} = useSelector(state=>state.search);
    const dispatch=useDispatch();
    const dimensions = Dimensions.get('screen');
    useEffect(()=>
    {
          getMovies().then((response)=>
          {
               //setMovies(response.data.results);
               dispatch(setSearchMovies(response.data.results));
               //setLoading(false);
               dispatch(setSearchLoading(false));
          })
    },[]);
    const styles = StyleSheet.create(
        {
            inputText:
            {
                width:dimensions.width,
                borderColor:"black",
                borderWidth:2,
                borderRadius:20,
                fontSize:20,
                fontWeight:"bold",
                marginBottom:dimensions.height*3/100,
                marginTop:20
            },
            icon:
            {
                zIndex:2,
                position:"absolute",
                left:dimensions.width*87/100,
                top:dimensions.height*2.6/100
            },
            loading:
            {
                flex:1,
                justifyContent:"center",
                alignContent:"center",
            },
            movies:
            {
                flex:1,
                flexDirection:"row",
                flexWrap:"wrap",
                justifyContent:"space-around"
            },
            movieContainer:
            {
                width:200,
                height:300
            }
        }
    )
    return(
        <ScrollView>
        <React.Fragment>
        <View>
        <TextInput style={styles.inputText} value={searchText} onChangeText={(new_text)=>{dispatch(setSearchText(new_text));}} numberOfLines={1}></TextInput>
        <Icon name={"search"} size={40} color="#00A8E1" style={styles.icon}/>
        </View>
        {
            searchLoading ? 
            <View style={styles.loading}>
                <ActivityIndicator size={30}/>
            </View> :
            <View style={styles.movies}>
                {
                    searchMovies.map((movie)=>
                    {
                          if(movie.title.toLowerCase().indexOf(searchText.toLowerCase())==0)
                          {
                              return(
                              <View style={styles.movieContainer}>
                                  <MovieCard item={movie} navigation={navigation}/>
                              </View>);
                          }
                          else
                          {
                              return null;
                          }
                    })
                }
            </View>
        }
        </React.Fragment>
        </ScrollView>
    )
}