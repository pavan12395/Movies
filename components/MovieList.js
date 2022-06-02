import React from 'react';
import {View,Text,FlatList,StyleSheet} from 'react-native';
import MovieCard from './MovieCard';
class MovieList extends React.PureComponent
{
     render()
     {
          const {title,movies,navigation} = this.props;
          const styles=StyleSheet.create(
               {
                    card:
                    {
                         padding:30,
                         marginRight:10
                    },
                    title:
                    {
                         fontWeight:"bold",
                         fontSize:30,
                         color:"white",
                         marginBottom:20
                    }
               }
          );
          const renderItem = ({item})=>
          {
                return <MovieCard item={item} navigation={navigation}/>
          }
          return(
               <View style={styles.card}>
                    <Text style={styles.title}>{title}</Text>
                    {
                       movies.length!=0 ? <FlatList data={movies} renderItem={renderItem} keyExtractor={(movie)=>movie.id} horizontal={true}></FlatList>
                       : <Text style={{...styles.title,textAlign:"center"}}>No Movies Yet!</Text>
                    }
               </View>
          )
     }
}
export default MovieList;